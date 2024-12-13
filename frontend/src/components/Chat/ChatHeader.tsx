import React from 'react'
import { ChatThread } from '../../types/chat'

interface ChatHeaderProps {
  thread: ChatThread
}

export default function ChatHeader({ thread }: ChatHeaderProps) {
  return <h1 className='font-bold text-xl'>{thread.threadTitle}</h1>
}
