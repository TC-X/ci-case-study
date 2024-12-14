import React from 'react'
import Sidebar from '../components/Layout/Sidebar.tsx'
import Chat from '../components/Chat/Chat.tsx'
import { useActiveThreadContext } from '../context/activeThreadContext.tsx'

export default function ChatPage(): React.ReactElement {
  const threadId: string = window.location.pathname.split('/c/')[1] || '' // we can use react-router in real world scenario
  const { activeThread, setActiveThread } = useActiveThreadContext()

  React.useEffect(() => {
    // NOTE:
    // In a real-world scenario, we would fetch the thread data from database
    // instead of using filtering from fakeThreads
    const findThreadById = (id: string) => {
      return fakeThreads.find((thread) => thread.threadId === id) || null
    }

    // bail out and redirect to home if thread not found
    if (findThreadById(threadId) === null) {
      window.history.pushState(null, '', `/`)
      return
    }

    // set initial active thread for first load
    setActiveThread(findThreadById(threadId))

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

const fakeThreads = [
  {
    threadId: '698ca073-9aa4-4555-a3df-006eda8cf340',
    threadTitle: 'Provide a weekly meal plan for weight loss',
  },
  {
    threadId: '26f68556-0ed5-4930-b650-a11095f30a33',
    threadTitle: 'What are the best exercises for a beginner?',
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

const fakeMessages = [
  {
    messageId: '223c3ca9-3a8a-4941-af02-eddbe000f34a',
    messageModel: '',
    messageAuthor: 'user',
    messageContent: 'Can you provide a weekly meal plan for weight loss?',
  },
  {
    messageId: 'd7e3c030-eec3-4a73-a16b-8190badd35d6',
    messageModel: 'gpt-4o',
    messageAuthor: 'assistant',
    messageContent:
      'Sure! Here is a weekly meal plan for weight loss: Monday: Breakfast - Oatmeal with berries, Lunch - Grilled chicken salad, Dinner - Baked salmon with steamed vegetables. Tuesday: Breakfast - Greek yogurt with honey, Lunch - Turkey and avocado wrap, Dinner - Quinoa-stuffed bell peppers.',
  },
  {
    messageId: '44141457-131c-4b41-9f0f-bd0afa40d758',
    messageModel: null,
    messageAuthor: 'user',
    messageContent: 'Thank you!',
  },
  {
    messageId: 'e0facfe3-aac5-4f11-b3a3-777ab305baa7',
    messageModel: 'gpt-4o',
    messageAuthor: 'assistant',
    messageContent: "You're welcome! If you have any other questions, feel free to ask.",
  },
]
