'use client'

import { useState } from 'react'
import { useResize } from '@aiszlab/relax'

const App = () => {
  const [count, setCount] = useState(0)

  useResize(() => {
    setCount((c) => c + 1)
  })

  return (
    <div className='flex flex-col items-center gap-y-2'>
      <span>调整窗口大小触发 resize 次数：{count}</span>
    </div>
  )
}

export default App
