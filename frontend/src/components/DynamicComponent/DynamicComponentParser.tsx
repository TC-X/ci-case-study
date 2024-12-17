import React from "react"
import Markdown from "../UI/Markdown"
import ButtonNewChat from "../Button/ButtonNewChat"
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

/* import all recharts for more coverage but bundle size trade-offs */
import * as Recharts from "recharts"
import ErrorBoundary from "../ErrorBoundary"

interface DynamicComponentParserProps {
  messageContent: string
}

const COMPONENT_MAP: Record<string, React.ComponentType<any>> = {
  ButtonNewChat, // example of an internal custom component
  // LineChart,
  // Line,
  // XAxis,
  // YAxis,
  // CartesianGrid,
  // Tooltip,
  // Legend,
  /* import all recharts for more coverage but bundle size trade-offs */
  ...Object.fromEntries(Object.entries(Recharts).map(([key, value]) => [key, value as React.ComponentType<any>])), // import all recharts components
}

const DYNAMIC_COMPONENT_BEGIN = "[DYNAMIC_COMPONENT_BEGIN]"
const DYNAMIC_COMPONENT_END = "[DYNAMIC_COMPONENT_END]"

/**
 * Parse a single prop value from string to the appropriate JS type.
 */
function parsePropValue(value: string, isBraceValue: boolean): any {
  // If it's a quoted value (e.g. myProp="Hello"), just return the string as is.
  if (!isBraceValue) return value

  // If it's a brace-wrapped value (e.g. myProp={42}), attempt to parse as JSON or JS.
  // First, if it's a simple numeric or string without JSON structure, handle directly.
  if (!value.includes("{") && !value.includes("[") && !value.includes(":")) {
    return !isNaN(Number(value)) ? Number(value) : value
  }

  // Try to convert it into valid JSON by adding quotes and converting single quotes to double quotes.
  const processed = value.replace(/(\w+):/g, '"$1":').replace(/'/g, '"')

  try {
    return JSON.parse(processed)
  } catch {
    return value // Return the original value if parsing fails.
  }
}

/**
 * Extracts props from a given props string, handling both brace and quote syntax.
 * e.g. propName={123} or propName="text"
 */
function parseProps(propsString: string): Record<string, any> {
  if (!propsString.trim()) return {}

  const regex = /(\w+)=\{(.*?)\}(?=\s|$)|(\w+)="([^"]+)"/g
  const props: Record<string, any> = {}

  for (const match of propsString.matchAll(regex)) {
    const [, propNameBrace, propValueBrace, propNameQuote, propValueQuote] = match
    const propName = propNameBrace || propNameQuote
    const propValue = propNameBrace ? propValueBrace : propValueQuote

    try {
      props[propName] = parsePropValue(propValue, Boolean(propNameBrace))
    } catch (e) {
      console.error(`Failed to parse prop ${propName}:`, e)
      props[propName] = propValue
    }
  }

  return props
}

/**
 * Attempts to extract a component match from a given string, handling both self-closing
 * and standard (with children) tags.
 */
function extractComponentMatch(componentString: string) {
  const trimmed = componentString.trim()

  // Self-closing tag pattern: <Component prop={...} />
  const selfClosingMatch = trimmed.match(/^<(\w+)([^>]*?)\/>\s*$/)
  if (selfClosingMatch) {
    const [fullMatch, componentName, propsString] = selfClosingMatch
    return { componentName, propsString, children: undefined, fullMatch }
  }

  // Tag with children: <Component prop={...}> ... </Component>
  const openTagMatch = trimmed.match(/^<(\w+)([^>]*?)>([\s\S]+)<\/\1>$/)
  if (openTagMatch) {
    const [fullMatch, componentName, propsString, children] = openTagMatch
    return { componentName, propsString, children, fullMatch }
  }

  return null
}

/**
 * Recursively parse a component string into a React element.
 */
function parseComponentRecursive(componentString: string): React.ReactElement | null {
  const match = extractComponentMatch(componentString)
  if (!match) return null

  const { componentName, propsString, children } = match
  const Component = COMPONENT_MAP[componentName]
  if (!Component) return null

  const props = parseProps(propsString)

  // If no children, just return the element.
  if (!children) {
    return React.createElement(Component, { ...props, key: Math.random() })
  }

  // If there are children, parse them as well (they may contain nested components).
  const parsedChildren = parseChildren(children)
  return React.createElement(Component, { ...props, key: Math.random() }, ...parsedChildren)
}

/**
 * Parses child content, which may contain text and/or nested components.
 */
function parseChildren(content: string): Array<React.ReactElement | string> {
  const result: Array<React.ReactElement | string> = []
  let remaining = content.trim()

  while (remaining) {
    // Match a component (either self-closing or with children).
    const componentMatch = remaining.match(/^<(\w+)[^>]*?>[\s\S]*?<\/\1>|^<(\w+)[^>]*?\/>/)
    if (componentMatch) {
      // Parse the matched component
      const parsed = parseComponentRecursive(componentMatch[0])
      if (parsed) result.push(parsed)
      // Remove the parsed component from the string
      remaining = remaining.slice(componentMatch[0].length).trim()
    } else {
      // If no component is found at the start, then take any text up to the next '<'
      const textMatch = remaining.match(/^[^<]+/)
      if (textMatch) {
        result.push(textMatch[0])
        remaining = remaining.slice(textMatch[0].length).trim()
      } else {
        // No more text or components
        break
      }
    }
  }

  return result
}

export default function DynamicComponentParser({ messageContent }: DynamicComponentParserProps) {
  // Split the content by dynamic component markers and process each part.
  const contentParts = messageContent
    .split(DYNAMIC_COMPONENT_BEGIN)
    .flatMap((part) => part.split(DYNAMIC_COMPONENT_END))
    .filter(Boolean)
    .map((part) => part.trim())

  return (
    <>
      {contentParts.map((part, index) => {
        // If it looks like a component (starts with < and ends with >), try parsing.
        if (part.match(/^<[\s\S]+>$/)) {
          return (
            <ErrorBoundary
              key={index}
              fallback={
                <div className="py-2 px-4 mt-4 w-fit bg-red-200 text-red-900 rounded-2xl">
                  Oops! something went wrong while rendering this component. Please try asking again.
                </div>
              }
            >
              {parseComponentRecursive(part)}
            </ErrorBoundary>
          )
        }

        // Render as Markdown if not a component.
        return <Markdown key={index} messageContent={part} />
      })}
    </>
  )
}
