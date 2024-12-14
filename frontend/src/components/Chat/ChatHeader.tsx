import React from 'react'
import { Thread } from '../../types/chat'
import { IconEllipsisVertical, IconPanelStartUnhide, IconSettings } from '../../utils/icons'
import ButtonIcon from '../UI/ButtonIcon'
import ButtonSidebarHide from '../Buttons/ButtonSidebarHide'
import { useSidebarContext } from '../../context/SidebarContext'
import ButtonNewChat from '../Buttons/ButtonNewChat'
import { getUserDevice } from '../../utils/getUserDevice'

interface ChatHeaderProps {
  thread: Thread
}

export default function ChatHeader({ thread }: ChatHeaderProps) {
  const { isMobile } = getUserDevice()
  const { isHidden, setIsHidden } = useSidebarContext()

  console.log(' isMobile, isTablet, isDesktop', isMobile)

  React.useEffect(() => {
    if (isMobile) {
      setIsHidden(true)
    }
  }, [isMobile, setIsHidden])

  return (
    <>
      {(isHidden || isMobile) && (
        <div className='flex max-lg:gap-3'>
          <ButtonSidebarHide />
          <ButtonNewChat />
        </div>
      )}
      <div>
        <h1 className='font-bold text-xl line-clamp-1 break-all'>{thread.threadTitle}</h1>
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
