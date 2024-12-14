import React from 'react'
import ChatInput from './ChatInput'
import ChatBody from './ChatBody'
import ChatHeader from './ChatHeader'
import { Message, Thread } from '../../types/chat'

interface ChatProps {
  thread: Thread
  threadMessages: Message[]
}

export default function Chat({ thread, threadMessages }: ChatProps) {
  return (
    <div className='h-full flex flex-col items-center'>
      <div className='mb-4 w-full flex gap-4 items-center'>
        <ChatHeader thread={thread} />
      </div>
      <div className={`size-full flex justify-center overflow-hidden`}>
        <div className={`max-w-[48rem] flex flex-col overflow-hidden`}>
          <div className='flex-1 overflow-y-auto'>
            <ChatBody threadMessages={threadMessages} />
          </div>
          <div>
            <ChatInput />
          </div>
        </div>
      </div>
    </div>
  )
}
