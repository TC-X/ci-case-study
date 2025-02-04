import React from "react"
import { Message } from "../../types/chat"
import ChatMessage from "./ChatMessage/ChatMessage"
import { useChatResolvingContext } from "../../context/ChatResolvingContext"
import ChatMessageSkeleton from "../UI/ChatMessageSkeleton"

interface ChatBodyProps {
  messages: Message[]
}

export default function ChatBody({ messages }: ChatBodyProps) {
  /* States */
  const { isResolving } = useChatResolvingContext()

  return (
    <div className="min-h-full min-w-full pb-10 max-lg:pb-6 prose prose-neutral prose-code:whitespace-break-spaces prose-pre:bg-[#282c34] dark:prose-invert contain-paint">
      {messages?.map((message) => (
        <ChatMessage key={message.messageId} message={message} />
      ))}
      {isResolving && <ChatMessageSkeleton />}
    </div>
  )
}
