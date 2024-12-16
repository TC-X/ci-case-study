import React from 'react'

export default function ChatMessageSkeleton() {
  return (
    <div className='flex flex-col gap-3'>
      <div className='animate-loading-bar bg-gray-100 dark:bg-neutral-700 h-4 w-1/2 rounded-md' />
      <div className='animate-loading-bar bg-gray-100 dark:bg-neutral-700 h-4 w-3/4 rounded-md' />
      <div className='animate-loading-bar bg-gray-100 dark:bg-neutral-700 h-4 w-2/3 rounded-md' />
      <div className='animate-loading-bar bg-gray-100 dark:bg-neutral-700 h-4 w-3/4 rounded-md' />
    </div>
  )
}
