import React from 'react'
import { Thread } from '../../types/chat'
import { IconEllipsisVertical, IconSettings } from '../../utils/icons'
import IconButton from '../UI/IconButton'
import ButtonSidebarHide from '../Buttons/ButtonSidebarHide'
import { useSidebarContext } from '../../context/SidebarContext'
import ButtonNewChat from '../Buttons/ButtonNewChat'
import { getUserDevice } from '../../utils/getUserDevice'

interface ChatHeaderProps {
  thread: Thread | null
}

export default function ChatHeader({ thread }: ChatHeaderProps) {
  const { isMobile } = getUserDevice()
  const { isSidebarHidden, setIsSidebarHidden } = useSidebarContext()

  // Hide the sidebar on mobile
  React.useEffect(() => {
    if (isMobile) setIsSidebarHidden(true)
  }, [isMobile, setIsSidebarHidden])

  return (
    <>
      <div
        className={`flex max-lg:gap-3
          ${isSidebarHidden ? 'visible' : 'lg:hidden'}
        `}
      >
        <ButtonSidebarHide />
        <ButtonNewChat />
      </div>
      <div>
        <h1 className='font-bold text-xl line-clamp-1 break-all'>{thread?.threadTitle || 'New Chat'}</h1>
      </div>
      <div className='ms-auto flex max-lg:gap-3'>
        <IconButton handleOnClick={() => alert('Coming soon!')}>
          <IconSettings className='dark:[&>path]:stroke-neutral-200' size={24} />
        </IconButton>
        <IconButton handleOnClick={() => alert('Coming soon!')}>
          <IconEllipsisVertical className='dark:[&>path]:stroke-neutral-200' size={24} />
        </IconButton>
      </div>
    </>
  )
}

// const
