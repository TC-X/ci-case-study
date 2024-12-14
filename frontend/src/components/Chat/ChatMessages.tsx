import React from 'react'
import { ChatMessage } from '../../types/chat'

interface ChatMessagesProps {
  threadMessages: ChatMessage[]
}

interface ChatMessageItemProps {
  message: ChatMessage
}

export default function ChatMessages({ threadMessages }: ChatMessagesProps) {
  return (
    <div className='size-full prose prose-neutral dark:prose-invert'>
      {threadMessages?.map((message) => (
        <ChatMessageItem key={message.messageId} message={message} />
      ))}
    </div>
  )
}

const ChatMessageItem = ({ message }: ChatMessageItemProps) => {
  return (
    <article key={message.messageId} data-author={message.messageAuthor} data-id={message.messageId}>
      {message.messageContent}
    </article>
  )
}
