import { ChatThread } from '../ChatList/types'

export type ChatContentProps = {
  thread: ChatThread
  threadMessages: ChatMessage[]
}

export type ChatMessage = {
  messageId: string
  messageModel: string | null
  messageAuthor: string
  messageContent: string
}
