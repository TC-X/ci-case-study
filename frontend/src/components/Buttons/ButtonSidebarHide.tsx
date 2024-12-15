import React from 'react'
import ButtonIcon from '../UI/ButtonIcon'
import { IconPanelStartHide, IconPanelStartUnhide } from '../../utils/icons'
import { useSidebarContext } from '../../context/SidebarContext'

interface ButtonSidebarHideProps {
  className?: string
}

export default function ButtonSidebarHide({ className }: ButtonSidebarHideProps) {
  const { isHidden, setIsHidden } = useSidebarContext()

  return (
    <ButtonIcon className={className} handleOnClick={() => setIsHidden(!isHidden)}>
      {isHidden ? (
        <IconPanelStartUnhide className='dark:[&>path]:stroke-neutral-200' size={24} />
      ) : (
        <IconPanelStartHide className='dark:[&>path]:stroke-neutral-200' size={24} />
      )}
    </ButtonIcon>
  )
}
