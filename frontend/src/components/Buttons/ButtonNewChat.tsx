import React from 'react'
import { IconNewChat } from '../../utils/icons'
import IconButton from '../UI/IconButton'
import { useActiveThreadContext } from '../../context/ActiveThreadContext'
import { useNewChatContext } from '../../context/NewChatContext'

interface ButtonNewChatProps {
  className?: string
}

export default function ButtonNewChat({ className }: ButtonNewChatProps) {
  const { setActiveThread } = useActiveThreadContext()
  const { isNewChat } = useNewChatContext()

  const handleOnClick = () => {
    setActiveThread(null)
    window.history.pushState(null, '', `/`)
  }

  return (
    !isNewChat && (
      <IconButton className={className} handleOnClick={handleOnClick}>
        <IconNewChat className='dark:[&>path]:stroke-neutral-200' size={24} />
      </IconButton>
    )
  )
}
