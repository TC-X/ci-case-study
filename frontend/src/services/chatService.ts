import { Message } from "../types/chat"

const BACKEND_ENDPOINT = "http://localhost:5678/api/chat/"

interface getChatResponseProps {
  inputContext: Message[]
}

interface NormalizedInputContextType {
  author: string
  content: string
}

export async function getChatResponse({ inputContext }: getChatResponseProps) {
  // NOTE: input context pre-processing/optimization logic would go here
  const normalizedInputContext: NormalizedInputContextType[] = inputContext.map(
    ({ messageAuthor, messageContent }) => ({
      author: messageAuthor,
      content: messageContent,
    })
  )

  console.log("Input context fed to llm (backend):\n", JSON.stringify(normalizedInputContext))

  // testing time delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const response = await fetch(BACKEND_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(normalizedInputContext),
  })

  if (!response.ok) {
    throw new Error(`HTTP error status: ${response.status}`)
  }

  try {
    const data = await response.json()
    console.log("Raw respose data from llm (backend):", data)
    return data
  } catch (err) {
    console.error("Error parsing response:", err)
    throw err
  }
}
