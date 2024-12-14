import React from 'react'
import { Message } from '../../types/chat'
import ChatMessage from './ChatMessage/ChatMessage'

interface ChatBodyProps {
  threadMessages: Message[]
}

export default function ChatBody({ threadMessages }: ChatBodyProps) {
  return (
    <div className='pb-10 prose prose-neutral dark:prose-invert contain-paint'>
      {threadMessages?.map((message) => (
        <ChatMessage key={message.messageId} message={message} />
      ))}
    </div>
  )
}
