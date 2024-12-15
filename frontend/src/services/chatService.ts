import { Message } from '../types/chat'

interface getChatResponseProps {
  inputContext: Message[]
}

export async function getChatResponse({ inputContext }: getChatResponseProps) {
  // NOTE: input context pre-processing logic would go here
  const normalizedInputContext: string = JSON.stringify(
    inputContext.map(({ messageContent, messageAuthor }) => `${messageAuthor}: ${messageContent}`).join(' /n/n ')
  )

  // testing time delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const response = await fetch('http://localhost:5001/api/chat/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: normalizedInputContext,
  })

  if (!response.ok) {
    throw new Error(`HTTP error status: ${response.status}`)
  }

  try {
    const data = await response.json()
    console.log('response data:', data)
    return data
  } catch (err) {
    console.error('Error parsing response:', err)
    throw err
  }
}
