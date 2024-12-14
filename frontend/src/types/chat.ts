export interface Thread {
  threadId: string
  threadTitle: string
}

export interface Message {
  messageId: string
  messageModel: string | null
  messageAuthor: string
  messageContent: string
}
