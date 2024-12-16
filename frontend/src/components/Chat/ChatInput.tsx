import React from 'react'
import { IconArrowUp } from '../../utils/icons'
import scrollToBottom from '../../utils/scrollToBottom'
import { useChatResolvingContext } from '../../context/ChatResolvingContext'

interface ChatInputProps {
  onSendMessage: (contentBody: string) => Promise<void>
  textareaRef: React.RefObject<HTMLTextAreaElement | null>
  scrollWindowRef: React.RefObject<HTMLDivElement | null>
  userPrompt: string
  setUserPrompt: React.Dispatch<React.SetStateAction<string>>
}

export default function ChatInput({
  onSendMessage,
  textareaRef,
  scrollWindowRef,
  userPrompt,
  setUserPrompt,
}: ChatInputProps) {
  /* States */
  const { isResolving, setIsResolving } = useChatResolvingContext()

  /* auto-grow textarea based on content */
  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.currentTarget
    setUserPrompt(value)

    event.currentTarget.style.height = 'auto' // Reset height
    event.currentTarget.style.height = `${event.currentTarget.scrollHeight}px` // Dynamically adjust height
  }

  const formSubmission = async () => {
    // post-submit operations
    if (textareaRef.current) {
      textareaRef.current?.focus()
      textareaRef.current.style.height = 'auto'
    }
    setUserPrompt('')
    setIsResolving(true) // flag to prevent multiple submissions
    scrollToBottom({ targetElement: scrollWindowRef })

    // send user prompt to backend
    await onSendMessage(userPrompt)
    setIsResolving(false)

    // scroll to bottom after receiving AI response
    scrollToBottom({ targetElement: scrollWindowRef })
  }

  /* handle form submission */
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (userPrompt.trim() === '' || isResolving) return // Prevent empty submission or multiple submissions
    formSubmission()
  }

  /* handle keyboard shortcuts */
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // trigger form submission on Enter key
    if (!event.shiftKey && event.key === 'Enter') {
      event.preventDefault()
      if (userPrompt.trim() === '' || isResolving) return // Prevent empty submission or multiple submissions
      formSubmission()
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
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
          disabled={userPrompt.trim() === '' || isResolving}
        >
          <IconArrowUp className='dark:[&>path]:stroke-neutral-200' size={24} />
        </button>
      </div>
    </form>
  )
}
