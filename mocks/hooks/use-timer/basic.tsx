'use client'

import { useState } from 'react'
import { Button } from 'musae'
import { useTimer } from '@aiszlab/relax'

const App = () => {
  const { timeout, clear } = useTimer()
  const [message, setMessage] = useState('暂无任务')

  return (
    <div className='flex flex-col items-center gap-y-2'>
      <span>{message}</span>
      <div className='flex gap-x-2'>
        <Button
          onClick={() => {
            timeout(() => setMessage('1 秒后触发'), 1000)
          }}
        >
          1 秒后
        </Button>
        <Button
          onClick={() => {
            timeout(() => setMessage('2 秒后触发'), 2000)
          }}
        >
          2 秒后
        </Button>
        <Button
          onClick={() => {
            clear()
            setMessage('已清除')
          }}
        >
          清除
        </Button>
      </div>
    </div>
  )
}

export default App
