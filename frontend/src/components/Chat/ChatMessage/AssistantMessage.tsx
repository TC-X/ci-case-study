import React from "react"
import { Message } from "../../../types/chat"
import DynamicComponentParser from "../../DynamicComponent/DynamicComponentParser"

interface AssistantMessageProps {
  message: Message
}

export default function AssistantMessage({ message }: AssistantMessageProps) {
  return (
    <article key={message.messageId} data-author={message.messageAuthor} data-id={message.messageId} className=" ">
      <h6 className="sr-only">CLUE said:</h6>
      <div className="[&>*:last-child]:mb-0 markdown-dynamic-html">
        <DynamicComponentParser messageContent={message.messageContent} />
      </div>
    </article>
  )
}
