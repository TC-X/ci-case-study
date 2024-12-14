import React from 'react'
import { Message } from '../../types/chat'
import ChatMessage from './ChatMessage/ChatMessage'

interface ChatBodyProps {
  messages: Message[]
}

export default function ChatBody({ messages }: ChatBodyProps) {
  return (
    <div className='min-h-full min-w-full pb-10 prose prose-neutral dark:prose-invert contain-paint'>
      {messages?.map((message) => (
        <ChatMessage key={message.messageId} message={message} />
      ))}
    </div>
  )
}
