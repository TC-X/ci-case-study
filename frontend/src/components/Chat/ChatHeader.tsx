import React from 'react'
import { Thread } from '../../types/chat'
import { IconEllipsisVertical, IconPanelStartUnhide, IconSettings } from '../../utils/icons'
import ButtonIcon from '../UI/ButtonIcon'
import ButtonSidebarHide from '../Buttons/ButtonSidebarHide'
import { useSidebarContext } from '../../context/SidebarContext'
import ButtonNewChat from '../Buttons/ButtonNewChat'
import { getUserDevice } from '../../utils/getUserDevice'

interface ChatHeaderProps {
  thread: Thread | null
}

export default function ChatHeader({ thread }: ChatHeaderProps) {
  const { isMobile } = getUserDevice()
  const { isHidden, setIsHidden } = useSidebarContext()

  // Hide the sidebar on mobile
  React.useEffect(() => {
    if (isMobile) setIsHidden(true)
  }, [isMobile, setIsHidden])

  return (
    <>
      <div
        className={`flex max-lg:gap-3
          ${isHidden ? 'visible' : 'lg:hidden'}
        `}
      >
        <ButtonSidebarHide />
        <ButtonNewChat />
      </div>
      <div>
        <h1 className='font-bold text-xl line-clamp-1 break-all'>{thread?.threadTitle || 'New Chat'}</h1>
      </div>
      <div className='ms-auto flex max-lg:gap-3'>
        <ButtonIcon handleOnClick={() => alert('Coming soon!')}>
          <IconSettings className='dark:[&>path]:stroke-neutral-200' size={24} />
        </ButtonIcon>
        <ButtonIcon handleOnClick={() => alert('Coming soon!')}>
          <IconEllipsisVertical className='dark:[&>path]:stroke-neutral-200' size={24} />
        </ButtonIcon>
      </div>
    </>
  )
}

// const
