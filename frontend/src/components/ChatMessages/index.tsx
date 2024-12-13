import React from 'react'
import { ChatMessagesProps } from './types'

export default function ChatMessages({ threadMessages }: ChatMessagesProps) {
  return (
    <div className='prose prose-neutral'>
      {threadMessages?.map((message) => (
        <article key={message.messageId} data-author={message.messageAuthor} data-id={message.messageId}>
          {message.messageContent}
        </article>
      ))}
    </div>
  )
}
