import React from "react"
import { Thread } from "../types/chat"
import ThreadListItem from "./ThreadListItem"

interface ThreadListProps {
  threads: Thread[]
}

export default function ThreadList({ threads }: ThreadListProps) {
  return (
    <nav className="overflow-y-auto">
      <ol>
        {threads?.map((thread) => (
          <li key={thread.threadId}>
            <ThreadListItem thread={thread} />
          </li>
        ))}
      </ol>
    </nav>
  )
}
