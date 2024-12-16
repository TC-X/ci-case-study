import React from 'react'
import { Message } from '../../../types/chat'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface AssistantMessageProps {
  message: Message
}

export default function AssistantMessage({ message }: AssistantMessageProps) {
  return (
    <article key={message.messageId} data-author={message.messageAuthor} data-id={message.messageId} className=' '>
      <h6 className='sr-only'>CLUE said:</h6>
      <div className='[&>*:last-child]:mb-0'>
        <ReactMarkdown children={message.messageContent} remarkPlugins={[remarkGfm]} />
      </div>
    </article>
  )
}
