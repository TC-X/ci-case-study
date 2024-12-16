import React from 'react'
import { Message } from '../../../types/chat'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface UserMessageProps {
  message: Message
}

export default function UserMessage({ message }: UserMessageProps) {
  return (
    <article
      key={message.messageId}
      data-author={message.messageAuthor}
      data-id={message.messageId}
      className='
      p-4 w-fit max-w-[38rem] ms-auto bg-gray-100 dark:bg-neutral-700 rounded-3xl
      my-10 max-lg:my-6 [&:first-child]:mt-0 [&:last-child]:mb-0
      '
    >
      <h6 className='sr-only'>User asked:</h6>
      <div className='[&>*:last-child]:m-0'>
        <ReactMarkdown children={message.messageContent} remarkPlugins={[remarkGfm]} />
      </div>
    </article>
  )
}
