import React from 'react'
import { ChatListProps } from './types'
import ThreadButton from './ThreadButton'

export default function ChatList({ threads }: ChatListProps) {
  const [activeThread, setActiveThread] = React.useState<string | null>(null)

  return (
    <div className='h-full min-w-60 max-w-60'>
      <nav>
        <ol>
          {threads?.map((thread) => (
            <li key={thread.threadId}>
              <ThreadButton thread={thread} activeThread={activeThread} setActiveThread={setActiveThread} />
            </li>
          ))}
        </ol>
      </nav>
    </div>
  )
}
