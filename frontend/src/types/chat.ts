export interface ChatThread {
  threadId: string
  threadTitle: string
}

export interface ChatMessage {
  messageId: string
  messageModel: string | null
  messageAuthor: string
  messageContent: string
}
