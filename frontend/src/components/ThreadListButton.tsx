import React from 'react'
import { ChatThread } from '../types/chat'

interface ThreadListButtonProps {
  thread: ChatThread
  activeThread: string | null
  setActiveThread: (threadId: string | null) => void
}

export default function ThreadListButton({ thread, activeThread, setActiveThread }: ThreadListButtonProps) {
  return (
    <button
      className={`
        p-2 w-full flex text-left dark:text-neutral-200 dark:hover:bg-neutral-800 rounded-md transition-colors duration-75
        ${activeThread === thread.threadId ? 'bg-gray-300 dark:bg-neutral-800' : 'hover:bg-gray-200'}  
      `}
      onClick={setActiveThread.bind(null, thread.threadId)}
      disabled={activeThread === thread.threadId}
    >
      <span className='line-clamp-1 overflow-ellipsis'>{thread.threadTitle}</span>
    </button>
  )
}
