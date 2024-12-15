import React from 'react'
import { IconArrowUp } from '../../utils/icons'

interface ChatInputProps {
  textareaRef: React.RefObject<HTMLTextAreaElement | null>
  onSendMessage: (contentBody: string) => Promise<void>
}

export default function ChatInput({ textareaRef, onSendMessage }: ChatInputProps) {
  const [userPrompt, setUserPrompt] = React.useState('')

  /* auto-grow textarea based on content */
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.currentTarget
    setUserPrompt(value)

    e.currentTarget.style.height = 'auto' // Reset height
    e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px` // Dynamically adjust height
  }

  /* handle form submission */
  const handleSubmit = async (e?: React.FormEvent<HTMLFormElement>) => {
    e && e.preventDefault()

    // todo: send userPrompt to backend
    await onSendMessage(userPrompt)

    // clear textarea and focus
    setUserPrompt('')
    textareaRef.current?.focus()
  }

  /* handle keyboard shortcuts */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (!e.shiftKey && e.key === 'Enter') {
      e.preventDefault()
      if (userPrompt.trim() === '') return // Prevent empty submission or multiple submissions
      handleSubmit()
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='p-2 flex justify-between bg-gray-100 dark:bg-neutral-700 gap-4 rounded-3xl shadow-[0_0_24px_0_#00000004] cursor-text'>
        <textarea
          className='p-2 w-full max-h-[30dvh] bg-transparent border-none focus:outline-none placeholder:text-gray-400 dark:placeholder:text-neutral-400 resize-none'
          placeholder='Ask anything'
          value={userPrompt}
          ref={textareaRef}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          rows={1}
          dir='auto'
          autoFocus
        />
        <button
          className='p-2 mt-auto bg-white dark:bg-neutral-600 hover:bg-gray-200 dark:hover:bg-neutral-800 rounded-full transition-[background-color_opacity] disabled:opacity-0'
          type='submit'
          disabled={userPrompt.trim() === ''}
        >
          <IconArrowUp className='dark:[&>path]:stroke-neutral-200' size={24} />
        </button>
      </div>
    </form>
  )
}
