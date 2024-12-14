import React from 'react'

interface ButtonIconProps {
  className?: string
  handleOnClick: () => void
  children: React.ReactNode
}

export default function ButtonIcon({ className, handleOnClick, children }: ButtonIconProps) {
  return (
    <button
      className={`p-2 hover:bg-gray-100 dark:hover:bg-neutral-700 rounded-lg transition-colors ${className}`}
      type='button'
      onClick={() => handleOnClick()}
    >
      {children}
    </button>
  )
}
