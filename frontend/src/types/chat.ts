export interface Thread {
  threadId: string
  threadTitle: string
}

export interface Message {
  threadId: string | undefined
  messageId: string
  messageModel: string | undefined
  messageAuthor: string
  messageContent: string
  messageTimestamp: string
}
