import React, { useEffect } from 'react'
import { ChatThread } from '../../types/chat'
import ThreadList from '../ThreadList'
import { IconSidebarHide } from '../../utils/icons'
import { useSidebarContext } from '../../context/SidebarContext'

interface SidebarProps {
  threads: ChatThread[]
}

export default function Sidebar({ threads }: SidebarProps) {
  const { isHidden } = useSidebarContext()

  useEffect(() => {
    console.log(isHidden)
  }, [isHidden])

  return (
    <div
      className={`
      p-4 h-full flex flex-col gap-3 transition-[width_padding] duration-150 ease-in-out
      bg-gray-50 dark:bg-neutral-700 rounded-xl
      ${isHidden ? 'w-0 px-0 overflow-hidden' : 'w-60'}
    `}
    >
      <SidebarHideButton />
      <ThreadList threads={threads} />
    </div>
  )
}

const SidebarHideButton = () => {
  const { isHidden, setIsHidden } = useSidebarContext()

  return (
    <div className='p-2 flex'>
      <button type='button' onClick={() => setIsHidden(!isHidden)}>
        <div className='min-w-6 min-h-6 max-w-6 max-h-6 grid place-content-center'>
          <IconSidebarHide className='dark:[&>path]:stroke-white' size={20} />
        </div>
      </button>
    </div>
  )
}
