import React from 'react'
import ChatInput from './ChatInput'
import ChatMessages from './ChatMessages'
import ChatHeader from './ChatHeader'
import { ChatMessage, ChatThread } from '../../types/chat'

interface ChatProps {
  thread: ChatThread
  threadMessages: ChatMessage[]
}

export default function Chat({ thread, threadMessages }: ChatProps) {
  return (
    <div className='px-4 h-full flex justify-center'>
      <div className='w-full max-w-[48rem] flex flex-col'>
        <div className='pb-4'>
          <ChatHeader thread={thread} />
        </div>
        <div className='flex-1 overflow-y-auto'>
          <ChatMessages threadMessages={threadMessages} />
        </div>
        <div>
          <ChatInput />
        </div>
      </div>
    </div>
  )
}
