import React from 'react'
import { Message, Thread } from '../types/chat'
import { mockMessages } from '../mocks/messageData'

interface ChatMessagesProps {
  thread: Thread | null
}

export default function useChatMessages({ thread }: ChatMessagesProps) {
  /* States */
  const [messages, setMessages] = React.useState<Message[]>([])

  /* when thread changes, load messages from local storage or database (mock data) */
  React.useEffect(() => {
    if (!thread) {
      setMessages([]) // Bail out if no thread is selected (use as a new chat)
      return
    }

    // NOTE: In a real application, we would use a more sophisticated caching strategy
    // ** since we have timestamp in the message, we could set limit or expiration time for the local storage
    const cachedMessages = localStorage.getItem(thread.threadId)
    if (cachedMessages) {
      setMessages(JSON.parse(cachedMessages))
    } else {
      const chatHistory = mockMessages.filter((message) => message.threadId === thread.threadId)
      setMessages(chatHistory)
    }
  }, [thread])

  /* when messages change, update local storage */
  React.useEffect(() => {
    thread && localStorage.setItem(thread.threadId, JSON.stringify(messages))
  }, [messages, thread])

  return { messages, setMessages }
}
