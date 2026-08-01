'use client'

import { useState } from 'react'
import { useRaf } from '@aiszlab/relax'

const App = () => {
  const [count, setCount] = useState(0)

  const tick = useRaf(() => {
    setCount((c) => c + 1)
  })

  return (
    <div className='flex flex-col items-center gap-y-2'>
      <div
        onMouseMove={tick}
        className='flex h-32 w-64 items-center justify-center border border-dashed border-gray-400'
      >
        在此区域内移动鼠标
      </div>
      <span>raf 触发次数：{count}</span>
    </div>
  )
}

export default App
