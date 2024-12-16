import React from "react"
import { Thread } from "../types/chat"

interface ActiveThreadContextType {
  activeThread: Thread | null
  setActiveThread: React.Dispatch<React.SetStateAction<Thread | null>>
}

export const Context = React.createContext({} as ActiveThreadContextType)
export const useActiveThreadContext = () => React.useContext(Context)

export function ActiveThreadContextProvider({ children }: { children: React.ReactNode }) {
  const [activeThread, setActiveThread] = React.useState<Thread | null>(null)

  const value = {
    activeThread,
    setActiveThread,
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}
