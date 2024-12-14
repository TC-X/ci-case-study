import React from 'react'
import { IconNewChat } from '../../utils/icons'
import ButtonIcon from '../UI/ButtonIcon'
import { useActiveThreadContext } from '../../context/activeThreadContext'

interface ButtonNewChatProps {
  className?: string
}

export default function ButtonNewChat({ className }: ButtonNewChatProps) {
  const { setActiveThread } = useActiveThreadContext()

  const handleOnClick = () => {
    setActiveThread(null)
    window.history.pushState(null, '', `/`)
  }

  return (
    <ButtonIcon className={className} handleOnClick={handleOnClick}>
      <IconNewChat className='dark:[&>path]:stroke-neutral-200' size={24} />
    </ButtonIcon>
  )
}
