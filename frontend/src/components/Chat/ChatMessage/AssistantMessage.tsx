import React from 'react'
import { Message } from '../../../types/chat'

interface AssistantMessageProps {
  message: Message
}

export default function AssistantMessage({ message }: AssistantMessageProps) {
  return (
    <article key={message.messageId} data-author={message.messageAuthor} data-id={message.messageId} className=' '>
      <h6 className='sr-only'>CLUE said:</h6>
      <div className='[&>*:last-child]:mb-0' dangerouslySetInnerHTML={{ __html: message.messageContent }} />
    </article>
  )
}