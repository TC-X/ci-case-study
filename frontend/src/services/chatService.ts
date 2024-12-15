import { Message } from '../types/chat'

interface getChatResponseProps {
  inputContext: Message[]
}

export async function getChatResponse({ inputContext }: getChatResponseProps) {
  const response = await fetch('http://localhost:3001/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ inputContext }),
  })

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  const data = await response.json()

  return data
}
