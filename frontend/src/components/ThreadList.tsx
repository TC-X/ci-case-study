import React from 'react'
import { Thread } from '../types/chat'
import ThreadListItem from './ThreadListItem'

interface ThreadListProps {
  threads: Thread[]
}

export default function ThreadList({ threads }: ThreadListProps) {
  const [activeThread, setActiveThread] = React.useState<string | null>(null)

  return (
    <nav className='overflow-y-auto'>
      <ol>
        {threads?.map((thread) => (
          <li key={thread.threadId}>
            <ThreadListItem thread={thread} activeThread={activeThread} setActiveThread={setActiveThread} />
          </li>
        ))}
      </ol>
    </nav>
  )
}
