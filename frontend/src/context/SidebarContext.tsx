import React from 'react'

interface SidebarContextType {
  isSidebarHidden: boolean
  setIsSidebarHidden: React.Dispatch<React.SetStateAction<boolean>>
}

export const Context = React.createContext({} as SidebarContextType)
export const useSidebarContext = () => React.useContext(Context)

export function SidebarContextProvider({ children }: { children: React.ReactNode }) {
  const [isSidebarHidden, setIsSidebarHidden] = React.useState(false)

  const value = {
    isSidebarHidden,
    setIsSidebarHidden,
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}
