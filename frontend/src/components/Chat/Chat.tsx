import React from 'react'
import ChatInput from './ChatInput'
import ChatBody from './ChatBody'
import ChatHeader from './ChatHeader'
import { Message, Thread } from '../../types/chat'
import { getChatResponse } from '../../services/chatService'
import { ChatResolvingContextProvider } from '../../context/ChatResolvingContext'
import scrollToBottom from '../../utils/scrollToBottom'
import useChatMessages from '../../hooks/useChatMessages'

interface ChatProps {
  thread: Thread | null
}

export default function Chat({ thread }: ChatProps) {
  // States
  const { messages, setMessages } = useChatMessages({ thread })
  const [userPrompt, setUserPrompt] = React.useState('')

  // Refs for textarea and scroll window (passing to child components)
  const textareaRef = React.useRef<HTMLTextAreaElement>(null)
  const scrollWindowRef = React.useRef<HTMLDivElement>(null)

  // Post-mount UI effects: focusing textarea, resetting prompt, and scrolling
  React.useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus()
      textareaRef.current.style.height = 'auto'
    }
    setUserPrompt('')
    scrollToBottom({ targetElement: scrollWindowRef, smooth: false })
  }, [thread])

  // Smooth scroll to bottom on new message
  React.useEffect(() => {
    scrollToBottom({ targetElement: scrollWindowRef, smooth: true })
  }, [messages])

  const handleSendMessage = async (contentBody: string) => {
    // todo(optional):
    // create a new thread if no thread (new chat)
    // so user can continue the conversation

    const userMessage: Message = {
      threadId: thread?.threadId,
      messageId: crypto.randomUUID(),
      messageModel: '',
      messageAuthor: 'user',
      messageContent: contentBody,
      messageTimestamp: new Date().toISOString(),
    }

    setMessages((prevMessages) => [...prevMessages, userMessage])

    try {
      const inputContext = [...messages, userMessage] // prevent batched state updates (setMessages) causing outdated messages
      const response = await getChatResponse({ inputContext })

      // NOTE: mapping api response with type Message here, if not from the backend
      const responseMessage: Message = {
        threadId: thread?.threadId,
        messageId: crypto.randomUUID(),
        messageModel: response.response_model,
        messageAuthor: response.response_author,
        messageContent: response.response_content,
        messageTimestamp: new Date().toISOString(),
      }

      // Set the response message in the chat
      setMessages((prevMessages) => [...prevMessages, responseMessage])
    } catch (error) {
      console.error('Failed to send message:', error)
    }
  }

  return (
    <ChatResolvingContextProvider>
      <div className='h-full flex flex-col items-center'>
        <div className='mb-4 w-full flex gap-4 items-center'>
          <ChatHeader thread={thread} />
        </div>
        <div className='size-full flex justify-center overflow-hidden'>
          <div className='w-full max-w-[48rem] flex flex-col overflow-hidden'>
            <div className='flex-1 overflow-y-auto' ref={scrollWindowRef}>
              <ChatBody messages={messages} />
            </div>
            <div>
              <ChatInput
                onSendMessage={handleSendMessage}
                textareaRef={textareaRef}
                scrollWindowRef={scrollWindowRef}
                userPrompt={userPrompt}
                setUserPrompt={setUserPrompt}
              />
            </div>
          </div>
        </div>
      </div>
    </ChatResolvingContextProvider>
  )
}
