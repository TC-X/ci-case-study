import React from 'react'

interface SidebarContextType {
  isHidden: boolean
  setIsHidden: React.Dispatch<React.SetStateAction<boolean>>
}

export const Context = React.createContext({} as SidebarContextType)
export const useSidebarContext = () => React.useContext(Context)

export function SidebarContextProvider({ children }: { children: React.ReactNode }) {
  const [isHidden, setIsHidden] = React.useState(false)

  const value = {
    isHidden,
    setIsHidden,
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}
