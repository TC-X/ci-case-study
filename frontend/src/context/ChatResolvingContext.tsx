import React from "react"

interface ChatResolvingContextType {
  isResolving: boolean
  setIsResolving: React.Dispatch<React.SetStateAction<boolean>>
}

export const Context = React.createContext({} as ChatResolvingContextType)
export const useChatResolvingContext = () => React.useContext(Context)

export function ChatResolvingContextProvider({ children }: { children: React.ReactNode }) {
  const [isResolving, setIsResolving] = React.useState<boolean>(false)

  const value = {
    isResolving,
    setIsResolving,
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}
