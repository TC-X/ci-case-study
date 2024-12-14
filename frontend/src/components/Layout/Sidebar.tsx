import React from 'react'
import { ChatThread } from '../../types/chat'
import ThreadList from '../ThreadList'
import { useSidebarContext } from '../../context/SidebarContext'

interface SidebarProps {
  threads: ChatThread[]
}

export default function Sidebar({ threads }: SidebarProps) {
  const { isHidden } = useSidebarContext()

  return (
    <div
      className={`
      p-4 size-full flex flex-col transition-[max-width_padding_margin] duration-150 ease-in-out
      bg-gray-100 dark:bg-neutral-700 rounded-xl
      max-lg:max-w-0 max-lg:px-0 max-lg:me-0 max-lg:overflow-hidden
      ${isHidden ? 'max-w-0 px-0 me-0 overflow-hidden' : 'me-4 max-w-72'}
    `}
    >
      <div className='px-2 py-4'>
        <h2 className='font-bold text-sm line-clamp-1 break-all'>Chat History</h2>
      </div>
      <ThreadList threads={threads} />
    </div>
  )
}
