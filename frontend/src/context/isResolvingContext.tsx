import React from 'react'

interface IsResolvingContextType {
  isResolving: boolean
  setIsResolving: React.Dispatch<React.SetStateAction<boolean>>
}

export const Context = React.createContext({} as IsResolvingContextType)
export const useIsResolvingContext = () => React.useContext(Context)

export function IsResolvingContextProvider({ children }: { children: React.ReactNode }) {
  const [isResolving, setIsResolving] = React.useState<boolean>(false)

  const value = {
    isResolving,
    setIsResolving,
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}
