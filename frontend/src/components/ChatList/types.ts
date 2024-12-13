export type ChatListProps = {
  threads: ChatThread[]
}

export type ChatThread = {
  threadId: string
  threadTitle: string
}

export type ThreadButtonProps = {
  thread: ChatThread
  activeThread: string | null
  setActiveThread: (threadId: string | null) => void
}
