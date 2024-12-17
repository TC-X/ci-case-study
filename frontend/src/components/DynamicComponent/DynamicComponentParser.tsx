import React from "react"
import Markdown from "../UI/Markdown"
import ButtonNewChat from "../Button/ButtonNewChat"
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"
import * as Recharts from "recharts" // import all recharts for more coverage but bundle size trade-offs
import ErrorBoundary from "../ErrorBoundary"
import { DYNAMIC_COMPONENT_BEGIN, DYNAMIC_COMPONENT_END } from "../../constants/dynamicComponent"

/*
 * This component parses a string of content that may contain dynamic components and renders them accordingly.
 * Dynamic components are defined by wrapping JSX-like syntax in the following markers:
 * [DYNAMIC_COMPONENT_BEGIN] ... [DYNAMIC_COMPONENT_END]
 *
 * Example:
 * "Hello, [DYNAMIC_COMPONENT_BEGIN]<ButtonNewChat />[DYNAMIC_COMPONENT_END]! How can I help you?"
 * The component will parse the content and render the ButtonNewChat component in place of the marker.
 *
 * Parsing Flow:
 * 1. Receive messageContent from LLM; a string of content that may contain dynamic components.
 * 2. Split the content by dynamic component markers and process each part.
 * 3. If it looks like a component (starts with < and ends with > and begin with uppercase), try parsing.
 * 3.1 If it's a self-closing tag, parse the component and its props.
 * 3.2 If it's a tag with children, parse the children recursively.
 * 3.3 If it's a valid component, render it.
 * 3.4 If it's an invalid component, render an error message.
 * 4. Render as Markdown if not a component.
 *
 * Component Map:
 * 1. Internal preset component (e.g. ButtonNewChat) -- Need to add to system prompt so that llm knows about it
 * 2. Passthrough library component (e.g. Recharts)
 */

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

/**
 * This function parses a prop "value"
 * e.g. myProp={123} or myProp="text"
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
    return JSON.parse(processed) // Return the parsed JSON value.
  } catch {
    return value // Return the original value if parsing fails.
  }
}

/**
 * This function parses "props" name-value pairs from a string.
 * e.g. propName={123} or propName="text"
 */
function parseProps(propsString: string): Record<string, any> {
  if (!propsString.trim()) return {}

  // Match string like "propName={value}" or "propName="value""
  const regex = /(\w+)=\{(.*?)\}(?=\s|$)|(\w+)="([^"]+)"/g
  const props: Record<string, any> = {}

  // Iterate over all matches and parse the prop name and value.
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

  return props // Return the parsed props object.
}

/**
 * This function extracts a component match from a given string.
 * It matches both self-closing (without children) *
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
 * This function enables parsing of nested components.
 * It recursively parses components within children.
 */
function parseComponentRecursive(componentString: string): React.ReactElement | null {
  const match = extractComponentMatch(componentString)
  if (!match) return null

  const { componentName, propsString, children } = match
  const Component = COMPONENT_MAP[componentName] // Get the component from the map.
  if (!Component) return null

  const props = parseProps(propsString)

  // If no children, just return the element.
  if (!children) {
    return React.createElement(Component, { ...props, key: Math.random() })
  }

  // ** If there are children, parse them as well (they may contain nested components).
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
      // recursively parse the component and add it to the result
      const parsed = parseComponentRecursive(componentMatch[0])
      if (parsed) result.push(parsed)
      // Remove the parsed component from the string
      remaining = remaining.slice(componentMatch[0].length).trim()
    } else {
      // if no component is found at the start, then take any text up to the next '<'
      // in case there are no more components in the children
      const textMatch = remaining.match(/^[^<]+/)
      if (textMatch) {
        result.push(textMatch[0])
        remaining = remaining.slice(textMatch[0].length).trim()
      } else {
        break // if no text is found, break the loop
      }
    }
  }

  return result
}

export default function DynamicComponentParser({ messageContent }: DynamicComponentParserProps) {
  // Parsing flow starts here: Split the content by dynamic component markers and process each part.
  const contentParts = messageContent
    .split(DYNAMIC_COMPONENT_BEGIN)
    .flatMap((part) => part.split(DYNAMIC_COMPONENT_END))
    .filter(Boolean)
    .map((part) => part.trim())

  return (
    <>
      {contentParts.map((part, index) => {
        // If it looks like a component (starts with < and ends with > and begin with uppercase), try parsing.
        if (part.match(/^<[A-Z]\w*[^>]*\/?>.*?(<\/[A-Z]\w*>|$)/)) {
          return (
            <ErrorBoundary
              key={index}
              fallback={
                <div className="py-2 px-4 mt-4 w-fit bg-red-200 text-red-900 rounded-2xl">
                  Oops! something went wrong while rendering this component. Please try asking again.
                </div>
              }
            >
              {parseComponentRecursive(part)} {/* Recursive flow starts here */}
            </ErrorBoundary>
          )
        }

        // Render as normal Markdown if not a component.
        return <Markdown key={index} messageContent={part} />
      })}
    </>
  )
}
