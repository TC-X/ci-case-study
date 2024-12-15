import React from 'react'
import ChatInput from './ChatInput'
import ChatBody from './ChatBody'
import ChatHeader from './ChatHeader'
import { Message, Thread } from '../../types/chat'
import { getChatResponse } from '../../services/chatService'
import { IsResolvingContextProvider } from '../../context/isResolvingContext'

interface ChatProps {
  thread: Thread | null
}

export default function Chat({ thread }: ChatProps) {
  const [messages, setMessages] = React.useState<Message[]>([])

  const textareaRef = React.useRef<HTMLTextAreaElement>(null)
  const scrollWindowRef = React.useRef<HTMLDivElement>(null)

  // NOTE: In a real application, I would fetch the message from database/api here
  React.useEffect(() => {
    if (!thread) return setMessages([])

    // const chatHistory = await fetchMessages(thread.threadId)
    const chatHistory = fakeMessages.filter((message) => message.threadId === thread.threadId)
    setMessages(chatHistory)
    textareaRef.current?.focus() // refocus on textarea after thread change
  }, [thread])

  const handleSendMessage = async (contentBody: string) => {
    const userMessage: Message = {
      threadId: thread?.threadId,
      messageId: crypto.randomUUID(),
      messageModel: '',
      messageAuthor: 'user',
      messageContent: contentBody,
      messageTimestamp: new Date().toISOString(),
    }

    setMessages((prevMessages) => [...prevMessages, userMessage])

    try {
      const inputContext = [...messages, userMessage] // prevent batched state updates (setMessages) causing outdated messages
      const response = await getChatResponse({ inputContext })

      // console.log(response)

      // NOTE: mapping api response with type Message here, if not from the backend
      const responseMessage: Message = {
        threadId: thread?.threadId,
        messageId: crypto.randomUUID(),
        messageModel: response.response_model,
        messageAuthor: response.response_author,
        messageContent: response.response_content,
        messageTimestamp: new Date().toISOString(),
      }

      // Set the response message in the chat
      // NOTE: CRUD logic would go here, if not from the backend
      setMessages((prevMessages) => [...prevMessages, responseMessage])

      console.log('messages', messages)
    } catch (error) {
      console.error('Failed to send message:', error)
    }
  }

  return (
    <IsResolvingContextProvider>
      <div className='h-full flex flex-col items-center'>
        <div className='mb-4 w-full flex gap-4 items-center'>
          <ChatHeader thread={thread} />
        </div>
        <div className='size-full flex justify-center overflow-hidden'>
          <div className='w-full max-w-[48rem] flex flex-col overflow-hidden'>
            <div className='flex-1 overflow-y-auto' ref={scrollWindowRef}>
              <ChatBody messages={messages} />
            </div>
            <div>
              <ChatInput
                onSendMessage={handleSendMessage}
                textareaRef={textareaRef}
                scrollWindowRef={scrollWindowRef}
              />
            </div>
          </div>
        </div>
      </div>
    </IsResolvingContextProvider>
  )
}

const fakeMessages: Message[] = [
  {
    threadId: '698ca073-9aa4-4555-a3df-006eda8cf340',
    messageId: '223c3ca9-3a8a-4941-af02-eddbe000f34a',
    messageModel: '',
    messageAuthor: 'user',
    messageContent: 'Can you provide a weekly meal plan for weight loss?',
    messageTimestamp: '2022-01-01T00:00:00.000Z',
  },
  {
    threadId: '698ca073-9aa4-4555-a3df-006eda8cf340',
    messageId: 'd7e3c030-eec3-4a73-a16b-8190badd35d6',
    messageModel: 'gpt-4o',
    messageAuthor: 'assistant',
    messageContent:
      'Sure! Here is a weekly meal plan for weight loss: Monday: Breakfast - Oatmeal with berries, Lunch - Grilled chicken salad, Dinner - Baked salmon with steamed vegetables. Tuesday: Breakfast - Greek yogurt with honey, Lunch - Turkey and avocado wrap, Dinner - Quinoa-stuffed bell peppers.',
    messageTimestamp: '2022-01-01T00:01:00.000Z',
  },
  {
    threadId: '698ca073-9aa4-4555-a3df-006eda8cf340',
    messageId: '44141457-131c-4b41-9f0f-bd0afa40d758',
    messageModel: undefined,
    messageAuthor: 'user',
    messageContent: 'Thank you!',
    messageTimestamp: '2022-01-01T00:02:00.000Z',
  },
  {
    threadId: '698ca073-9aa4-4555-a3df-006eda8cf340',
    messageId: 'e0facfe3-aac5-4f11-b3a3-777ab305baa7',
    messageModel: 'gpt-4o',
    messageAuthor: 'assistant',
    messageContent: "You're welcome! If you have any other questions, feel free to ask.",
    messageTimestamp: '2022-01-01T00:03:00.000Z',
  },
  {
    threadId: '26f68556-0ed5-4930-b650-a11095f30a33',
    messageId: '223c3ca9-3a8a-4941-ab31-eddbe000f34a',
    messageModel: undefined,
    messageAuthor: 'user',
    messageContent: 'What are the best exercises for a beginner who wants to start working out and get in shape?',
    messageTimestamp: '2022-01-01T00:01:00.000Z',
  },
  {
    threadId: '26f68556-0ed5-4930-b650-a11095f30a33',
    messageId: 'e0facfe3-aac5-4f11-b3a3-777ab305baa7',
    messageModel: 'gpt-4o',
    messageAuthor: 'assistant',
    messageContent:
      'Here are some of the best exercises for beginners: 1. Walking - A great way to start exercising. 2. Cycling - Low impact and good for cardio. 3. Bodyweight exercises - Push-ups, squats, and planks. 4. Yoga - Improves flexibility and strength. 5. Swimming - Full-body workout with low impact on joints.',
    messageTimestamp: '2022-01-01T00:03:00.000Z',
  },
]
