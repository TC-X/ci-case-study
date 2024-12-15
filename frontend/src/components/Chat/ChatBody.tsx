import React from 'react'
import { Message } from '../../types/chat'
import ChatMessage from './ChatMessage/ChatMessage'
import { useIsResolvingContext } from '../../context/isResolvingContext'
import ChatMessageSkeleton from '../UI/ChatMessageSkeleton'

interface ChatBodyProps {
  messages: Message[]
}

export default function ChatBody({ messages }: ChatBodyProps) {
  const { isResolving } = useIsResolvingContext()

  return (
    <div className='min-h-full min-w-full pb-10 max-lg:pb-6 prose prose-neutral prose-code:whitespace-break-spaces dark:prose-invert contain-paint'>
      {messages?.map((message) => (
        <ChatMessage key={message.messageId} message={message} />
      ))}
      {isResolving && <ChatMessageSkeleton />}
    </div>
  )
}
