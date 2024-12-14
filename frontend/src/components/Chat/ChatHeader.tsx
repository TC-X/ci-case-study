import React from 'react'
import { ChatThread } from '../../types/chat'
import {
  IconEllipsisVertical,
  IconNewChat,
  IconPanelStartHide,
  IconPanelStartUnhide,
  IconSettings,
} from '../../utils/icons'
import { useSidebarContext } from '../../context/SidebarContext'
import ButtonIcon from '../Ui/ButtonIcon'

interface ChatHeaderProps {
  thread: ChatThread
}

export default function ChatHeader({ thread }: ChatHeaderProps) {
  const { isHidden, setIsHidden } = useSidebarContext()

  return (
    <>
      <div className='flex'>
        <ButtonIcon className='max-lg:hidden' handleOnClick={() => setIsHidden(!isHidden)}>
          {isHidden ? (
            <IconPanelStartUnhide className='dark:[&>path]:stroke-neutral-200' size={24} />
          ) : (
            <IconPanelStartHide className='dark:[&>path]:stroke-neutral-200' size={24} />
          )}
        </ButtonIcon>
        <ButtonIcon className='lg:hidden' handleOnClick={() => setIsHidden(false)}>
          <IconPanelStartUnhide className='dark:[&>path]:stroke-neutral-200' size={24} />
        </ButtonIcon>
        <ButtonIcon handleOnClick={() => alert('Coming soon!')}>
          <IconNewChat className='dark:[&>path]:stroke-neutral-200' size={24} />
        </ButtonIcon>
      </div>
      <div>
        <h1 className='font-bold text-xl line-clamp-1 break-all'>{thread.threadTitle}</h1>
      </div>
      <div className='ms-auto flex'>
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
