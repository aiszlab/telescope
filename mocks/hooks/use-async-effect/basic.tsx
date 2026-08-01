'use client'

import { useState } from 'react'
import { useAsyncEffect } from '@aiszlab/relax'

const App = () => {
  const [message, setMessage] = useState('加载中...')

  useAsyncEffect(async () => {
    // 模拟异步请求
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setMessage('异步数据加载完成')
  }, [])

  return (
    <div className='flex flex-col items-center gap-y-2'>
      <span>{message}</span>
    </div>
  )
}

export default App
