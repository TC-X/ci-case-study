import React from 'react'
import ChatInput from '../ChatInput'
import ChatMessages from '../ChatMessages'
import { ChatContentProps } from './types'

export default function ChatContent({ thread, threadMessages }: ChatContentProps) {
  return (
    <div className='h-full flex justify-center'>
      <div className='w-full max-w-[48rem] flex flex-col'>
        <div className='pb-4'>
          <h1 className='font-bold text-xl'>{thread.threadTitle}</h1>
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
