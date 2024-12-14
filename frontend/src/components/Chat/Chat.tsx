import React from 'react'
import ChatInput from './ChatInput'
import ChatBody from './ChatBody'
import ChatHeader from './ChatHeader'
import { Message, Thread } from '../../types/chat'

interface ChatProps {
  thread: Thread | null
}

export default function Chat({ thread }: ChatProps) {
  const [messages, setMessages] = React.useState<Message[]>([])

  const handleSendMessage = async (contentBody: string) => {
    console.log('Sending message to thread:', contentBody)
    setMessages((prevMessages: any) => [
      ...prevMessages,
      {
        messageId: prevMessages.length + 1,
        messageAuthor: 'user',
        messageContent: contentBody,
        messageTimestamp: new Date().toISOString(),
      },
    ])
  }

  return (
    <div className='h-full flex flex-col items-center'>
      <div className='mb-4 w-full flex gap-4 items-center'>
        <ChatHeader thread={thread} />
      </div>
      <div className='size-full flex justify-center overflow-hidden'>
        <div className='w-full max-w-[48rem] flex flex-col overflow-hidden'>
          <div className='flex-1 overflow-y-auto'>
            <ChatBody messages={messages} />
          </div>
          <div>
            <ChatInput onSendMessage={handleSendMessage} />
          </div>
        </div>
      </div>
    </div>
  )
}
