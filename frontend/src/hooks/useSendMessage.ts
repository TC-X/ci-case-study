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
        console.info(`This could be due to the following reasons:

          #################################
          ######## Troubleshooting ########
          #################################

          ## Backend ##
          1. Is the backend running?
             Make sure the virtual environment is activated and uvicorn is running.
          2. Check the port 5678
             The frontend expects http://localhost:5678. Test with:
             –– $ curl -X POST "http://localhost:5678/api/chat/" -H "Content-Type: application/json" -d '{"message": "Hello World"}'
          3. CORS / 405 Errors
             Update FRONTEND_URL in backend/app/main.py to match your frontend’s origin. Restart the backend if changed.

          ## Frontend ##
          1. Backend Port Changes
             If not using port 5678, update BACKEND_ENDPOINT in frontend/services/chatService.ts.

          If the issue persists, please don't hesitate to reach out to me at 306-881-4446 or tc.thitiwat@gmail.com :)
        `)

        alert('Oops! Unable to connect to the backend API. Please check the console for more details.')
      }
    },
    [thread, messages, setMessages]
  )

  return { handleSendMessage }
}
