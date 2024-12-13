import React from 'react'
import ChatList from '../components/ChatList'
import ChatContent from '../components/ChatContent'

export default function Chat(): React.ReactElement {
  return (
    <div className='w-full flex'>
      <aside className='p-4 bg-gray-50 dark:bg-neutral-700 rounded-xl'>
        <ChatList threads={fakeThreads} />
      </aside>
      <main className='px-4 flex-1'>
        <ChatContent thread={fakeThread} threadMessages={fakeMessages} />
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

const fakeThread = {
  threadId: '698ca073-9aa4-4555-a3df-006eda8cf340',
  threadTitle: 'Provide a weekly meal plan for weight loss',
}

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
    messageAuthor: 'system',
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
    messageAuthor: 'system',
    messageContent: "You're welcome! If you have any other questions, feel free to ask.",
  },
]
