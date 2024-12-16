import { useCallback } from 'react'
import { Message, Thread } from '../types/chat'
import { getChatResponse } from '../services/chatService'

interface UseSendMessageProps {
  thread: Thread | null
  messages: Message[]
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>
}

export function useSendMessage({ thread, messages, setMessages }: UseSendMessageProps) {
  // **useCallback to prevent unneccesary re-renders
  const handleSendMessage = useCallback(
    async (contentBody: string) => {
      /*
       * todo(optional):
       * create a new thread if no thread (new chat)
       * so user can continue the conversation
       */

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
    },
    [thread, messages, setMessages]
  )

  return { handleSendMessage }
}
