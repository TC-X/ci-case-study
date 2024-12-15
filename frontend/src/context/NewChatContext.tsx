import React from 'react'

interface NewChatContextType {
  isNewChat: boolean
  setIsNewChat: React.Dispatch<React.SetStateAction<boolean>>
}

export const Context = React.createContext({} as NewChatContextType)
export const useNewChatContext = () => React.useContext(Context)

export function NewChatContextProvider({ children }: { children: React.ReactNode }) {
  const [isNewChat, setIsNewChat] = React.useState<boolean>(false)

  const value = {
    isNewChat,
    setIsNewChat,
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}
