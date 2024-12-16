import React from "react"

interface IconButtonProps {
  className?: string
  handleOnClick: () => void
  children: React.ReactNode
}

export default function IconButton({ className, handleOnClick, children }: IconButtonProps) {
  return (
    <button
      className={`lg:p-2 lg:hover:bg-gray-100 lg:dark:hover:bg-neutral-700 rounded-lg transition-colors ${className}`}
      type="button"
      onClick={() => handleOnClick()}
    >
      {children}
    </button>
  )
}
