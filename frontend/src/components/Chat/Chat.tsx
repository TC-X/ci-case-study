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
    <div className='h-full flex flex-col items-center'>
      <div className='mb-2 w-full grid-layout-chat items-center'>
        <ChatHeader thread={thread} />
      </div>
      <div className={`size-full grid-layout-chat overflow-hidden`}>
        <div className={`col-start-2 max-lg:col-start-1 max-lg:col-span-3 flex flex-col overflow-hidden`}>
          <div className='flex-1 overflow-y-auto'>
            <ChatMessages threadMessages={threadMessages} />
          </div>
          <div>
            <ChatInput />
          </div>
        </div>
      </div>
    </div>
  )
}
