'use client'

import { useState } from 'react'
import { Button } from 'musae'
import { useTimeout } from '@aiszlab/relax'

const App = () => {
  const [message, setMessage] = useState('等待中...')

  const { flush, cancel } = useTimeout(() => {
    setMessage('时间到！')
  }, 3000)

  return (
    <div className='flex flex-col items-center gap-y-2'>
      <span>{message}</span>
      <div className='flex gap-x-2'>
        <Button onClick={flush}>立即触发</Button>
        <Button
          onClick={() => {
            cancel()
            setMessage('已取消')
          }}
        >
          取消
        </Button>
      </div>
    </div>
  )
}

export default App
