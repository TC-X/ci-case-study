import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Message } from '../../types/chat'

interface MarkdownProps {
  message: Message
}

export default function Markdown({ message }: MarkdownProps) {
  return (
    <ReactMarkdown
      children={message.messageContent}
      remarkPlugins={[remarkGfm]}
      components={{
        code({ node, inline, className, children, ...props }) {
          if (inline) {
            return (
              <code className={className} {...props}>
                {children}
              </code>
            )
          }
          const match = /language-(\w+)/.exec(className || '')
          return match ? (
            <SyntaxHighlighter style={oneDark} language={match[1]} PreTag='div' {...props}>
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          )
        },
      }}
    />
  )
}
