import React from "react"
import Sidebar from "../components/Layout/Sidebar.tsx"
import Chat from "../components/Chat/Chat.tsx"
import { useActiveThreadContext } from "../context/ActiveThreadContext.tsx"
import { mockThreads } from "../mocks/threadData.ts"

export default function ChatPage(): React.ReactElement {
  const { activeThread, setActiveThread } = useActiveThreadContext()

  const threadId: string = window.location.pathname.split("/c/")[1] || "" // could be simpler with react-router

  React.useEffect(() => {
    // NOTE:
    // In a real application, we would fetch the thread data from database
    // instead of using filtering from fakeThreads
    const findThreadById = (id: string) => {
      return mockThreads.find((thread) => thread.threadId === id) || null
    }

    const thread = findThreadById(threadId)

    // if thread is found, set active thread, otherwise redirect to new chat
    if (thread) {
      setActiveThread(thread) // set new active thread
    } else {
      setActiveThread(null)
      window.history.replaceState(null, "", "/") // redirect to new chat
    }

    // watch popstate to handle browser back/forward navigation
    // so active thread can be updated accordingly
    const handlePopState = () => {
      const newThreadId = window.location.pathname.split("/c/")[1] || ""
      setActiveThread(findThreadById(newThreadId))
    }

    window.addEventListener("popstate", handlePopState)
    return () => window.removeEventListener("popstate", handlePopState)
  }, [threadId, setActiveThread])

  return (
    <div className="w-full flex">
      <aside>
        <Sidebar threads={mockThreads} />
      </aside>
      <main className="w-full flex-1">
        <Chat thread={activeThread} />
      </main>
    </div>
  )
}
