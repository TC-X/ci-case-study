import React from 'react'
import Sidebar from '../components/Layout/Sidebar.tsx'
import Chat from '../components/Chat/Chat.tsx'
import { useActiveThreadContext } from '../context/activeThreadContext.tsx'
import { Thread } from '../types/chat.ts'

export default function ChatPage(): React.ReactElement {
  let threadId: string = window.location.pathname.split('/c/')[1] || '' // we can use react-router in real world scenario
  const { activeThread, setActiveThread } = useActiveThreadContext()

  React.useEffect(() => {
    // NOTE:
    // In a real application, we would fetch the thread data from database
    // instead of using filtering from fakeThreads
    const findThreadById = (id: string) => {
      return fakeThreads.find((thread) => thread.threadId === id) || null
    }

    const thread = findThreadById(threadId)

    // if thread is found, set active thread, otherwise redirect to new chat
    if (thread) {
      setActiveThread(thread) // set new active thread
    } else {
      setActiveThread(null)
      window.history.replaceState(null, '', '/') // redirect to new chat
    }

    // watch popstate to handle browser back/forward navigation
    // so active thread can be updated accordingly
    const handlePopState = () => {
      const newThreadId = window.location.pathname.split('/c/')[1] || ''
      setActiveThread(findThreadById(newThreadId))
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [threadId, setActiveThread])

  return (
    <div className='w-full flex'>
      <aside>
        <Sidebar threads={fakeThreads} />
      </aside>
      <main className='flex-1'>
        <Chat thread={activeThread} />
      </main>
    </div>
  )
}

const fakeThreads: Thread[] = [
  {
    threadId: '698ca073-9aa4-4555-a3df-006eda8cf340',
    threadTitle: 'Provide a weekly meal plan for weight loss',
  },
  {
    threadId: '26f68556-0ed5-4930-b650-a11095f30a33',
    threadTitle: 'Best exercises for a beginner',
  },
  {
    threadId: '3737f8cf-2051-4641-97cb-4368b3b132ff',
    threadTitle: 'How to improve my sleep?',
  },
  {
    threadId: 'dd8c1bbd-b22b-42c9-ba10-2a60e0aed368',
    threadTitle: 'What are the best ways to reduce stress?',
  },
  {
    threadId: '7d639d5d-51a5-4556-bf6d-f2e07ad02be1',
    threadTitle: 'How to start a meditation practice?',
  },
  {
    threadId: 'df6a2d23-4fbd-402f-b07c-58fa3e1c6e38',
    threadTitle: 'How to improve my focus and concentration?',
  },
]
