'use client'

import { useState } from 'react'
import { Button } from 'musae'
import { useEventSource } from '@aiszlab/relax'

const Connection = () => {
  useEventSource('https://sse.dev/test')
  return <span>SSE 连接已建立，卸载时自动关闭</span>
}

const App = () => {
  const [connected, setConnected] = useState(false)

  return (
    <div className='flex flex-col items-center gap-y-2'>
      {connected && <Connection />}
      <Button onClick={() => setConnected((v) => !v)}>
        {connected ? '断开连接' : '建立连接'}
      </Button>
    </div>
  )
}

export default App
