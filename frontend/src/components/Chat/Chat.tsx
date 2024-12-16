import React from "react"
import ChatInput from "./ChatInput"
import ChatBody from "./ChatBody"
import ChatHeader from "./ChatHeader"
import scrollToBottom from "../../utils/scrollToBottom"
import useChatMessages from "../../hooks/useChatMessages"
import { useSendMessage } from "../../hooks/useSendMessage"
import { ChatResolvingContextProvider } from "../../context/ChatResolvingContext"
import { Thread } from "../../types/chat"

interface ChatProps {
  thread: Thread | null
}

export default function Chat({ thread }: ChatProps) {
  /* States */
  const [userPrompt, setUserPrompt] = React.useState("")

  /* Hooks */
  const { messages, setMessages } = useChatMessages({ thread })
  const { handleSendMessage } = useSendMessage({ thread, messages, setMessages })

  /* Refs */
  const textareaRef = React.useRef<HTMLTextAreaElement>(null) // passing to children
  const scrollWindowRef = React.useRef<HTMLDivElement>(null) // passing to children

  /* UI control: handle thread change */
  React.useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus()
      textareaRef.current.style.height = "auto"
    }
    setUserPrompt("")
    scrollToBottom({ targetElement: scrollWindowRef, smooth: false })
  }, [thread])

  /* UI control: handle new message */
  React.useEffect(() => {
    scrollToBottom({ targetElement: scrollWindowRef, smooth: true })
  }, [messages])

  return (
    <ChatResolvingContextProvider>
      <div className="h-full flex flex-col items-center">
        <div className="mb-4 w-full flex gap-4 items-center">
          <ChatHeader thread={thread} />
        </div>
        <div className="size-full flex justify-center overflow-hidden">
          <div className="w-full max-w-[48rem] flex flex-col overflow-hidden">
            <div className="flex-1 overflow-y-auto" ref={scrollWindowRef}>
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
