import React from 'react'
import ChatPage from './pages/ChatPage'
import { SidebarContextProvider } from './context/SidebarContext'
import { ActiveThreadContextProvider } from './context/activeThreadContext'

function App(): React.ReactElement {
  return (
    <ActiveThreadContextProvider>
      <SidebarContextProvider>
        <div className='p-4 min-h-[100dvh] max-h-[100dvh] flex bg-white dark:bg-neutral-800'>
          <ChatPage />
        </div>
      </SidebarContextProvider>
    </ActiveThreadContextProvider>
  )
}

export default App
