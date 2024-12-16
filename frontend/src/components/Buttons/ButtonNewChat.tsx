import React from 'react'
import { IconNewChat } from '../../utils/icons'
import IconButton from '../UI/IconButton'
import { useActiveThreadContext } from '../../context/ActiveThreadContext'

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
    <IconButton className={className} handleOnClick={handleOnClick}>
      <IconNewChat className='dark:[&>path]:stroke-neutral-200' size={24} />
    </IconButton>
  )
}
