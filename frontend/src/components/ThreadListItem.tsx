import React from 'react'
import { Thread } from '../types/chat'

interface ThreadListItemProps {
  thread: Thread
  activeThread: string | null
  setActiveThread: (threadId: string | null) => void
}

export default function ThreadListItem({ thread, activeThread, setActiveThread }: ThreadListItemProps) {
  return (
    <button
      className={`
        p-2 w-full flex text-left dark:hover:bg-neutral-800 rounded-md transition-colors duration-75
        ${activeThread === thread.threadId ? 'bg-white dark:bg-neutral-800' : 'hover:bg-gray-50'}  
      `}
      onClick={setActiveThread.bind(null, thread.threadId)}
      disabled={activeThread === thread.threadId}
    >
      <span className='line-clamp-1 break-all'>{thread.threadTitle}</span>
    </button>
  )
}
