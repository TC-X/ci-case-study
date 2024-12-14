import React from 'react'
import { ChatThread } from '../types/chat'
import ThreadListButton from './ThreadListButton'

interface ThreadListProps {
  threads: ChatThread[]
}

export default function ThreadList({ threads }: ThreadListProps) {
  const [activeThread, setActiveThread] = React.useState<string | null>(null)

  return (
    <nav className='overflow-y-auto'>
      <ol>
        {threads?.map((thread) => (
          <li key={thread.threadId}>
            <ThreadListButton thread={thread} activeThread={activeThread} setActiveThread={setActiveThread} />
          </li>
        ))}
      </ol>
    </nav>
  )
}
