import React from 'react'
import { IconNewChat } from '../../utils/icons'
import ButtonIcon from '../UI/ButtonIcon'

interface ButtonNewChatProps {
  className?: string
}

export default function ButtonNewChat({ className }: ButtonNewChatProps) {
  return (
    <ButtonIcon className={className} handleOnClick={() => alert('Coming soon!')}>
      <IconNewChat className='dark:[&>path]:stroke-neutral-200' size={24} />
    </ButtonIcon>
  )
}
