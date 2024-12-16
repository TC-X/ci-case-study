import React from "react"
import { Message } from "../../../types/chat"
import UserMessage from "./UserMessage"
import AssistantMessage from "./AssistantMessage"

interface ChatMessageProps {
  message: Message
}

export default function ChatMessage({ message }: ChatMessageProps) {
  return (
    <>
      {message.messageAuthor === "user" && <UserMessage message={message} />}
      {message.messageAuthor === "assistant" && <AssistantMessage message={message} />}
    </>
  )
}
