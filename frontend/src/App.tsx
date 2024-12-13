import React from 'react'
import Chat from './pages/Chat'

function App(): React.ReactElement {
  return (
    <div className='p-6 min-h-[100dvh] max-h-[100dvh] flex bg-white dark:bg-neutral-800'>
      <Chat />
    </div>
  )
}

export default App
