import React from 'react'
import ChatPage from './pages/ChatPage'
import { SidebarContextProvider } from './context/SidebarContext'
import { ActiveThreadContextProvider } from './context/ActiveThreadContext'
import { NewChatContextProvider } from './context/NewChatContext'

function App(): React.ReactElement {
  return (
    <NewChatContextProvider>
      <ActiveThreadContextProvider>
        <SidebarContextProvider>
          <div className='p-4 min-h-[100dvh] max-h-[100dvh] flex bg-white dark:bg-neutral-800'>
            <ChatPage />
          </div>
        </SidebarContextProvider>
      </ActiveThreadContextProvider>
    </NewChatContextProvider>
  )
}

export default App
