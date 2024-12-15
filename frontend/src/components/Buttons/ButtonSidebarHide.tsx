import React from 'react'
import IconButton from '../UI/IconButton'
import { IconPanelStartHide, IconPanelStartUnhide } from '../../utils/icons'
import { useSidebarContext } from '../../context/SidebarContext'

interface ButtonSidebarHideProps {
  className?: string
}

export default function ButtonSidebarHide({ className }: ButtonSidebarHideProps) {
  const { isSidebarHidden, setIsSidebarHidden } = useSidebarContext()

  return (
    <IconButton className={className} handleOnClick={() => setIsSidebarHidden(!isSidebarHidden)}>
      {isSidebarHidden ? (
        <IconPanelStartUnhide className='dark:[&>path]:stroke-neutral-200' size={24} />
      ) : (
        <IconPanelStartHide className='dark:[&>path]:stroke-neutral-200' size={24} />
      )}
    </IconButton>
  )
}
