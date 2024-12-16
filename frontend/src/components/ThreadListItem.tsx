import React from "react"
import { Thread } from "../types/chat"
import { useActiveThreadContext } from "../context/ActiveThreadContext"

interface ThreadListItemProps {
  thread: Thread
}

export default function ThreadListItem({ thread }: ThreadListItemProps) {
  /* States */
  const { activeThread, setActiveThread } = useActiveThreadContext()

  const handleThreadClick = () => {
    setActiveThread(thread)
    window.history.pushState(null, "", `/c/${thread.threadId}`)
  }

  return (
    <button
      className={`
        p-2 w-full flex text-left dark:hover:bg-neutral-800 rounded-md transition-colors duration-75
        ${activeThread === thread ? "bg-white dark:bg-neutral-800" : "hover:bg-gray-50"}  
      `}
      onClick={handleThreadClick}
      disabled={activeThread === thread}
    >
      <span className="line-clamp-1 break-all">{thread.threadTitle}</span>
    </button>
  )
}
