'use client'

import { useState } from 'react'
import { Button } from 'musae'
import { useLazyRef } from '@aiszlab/relax'

const App = () => {
  const [, forceUpdate] = useState(0)
  const getValue = useLazyRef(() => Math.random())
  const value = getValue()

  return (
    <div className='flex flex-col items-center gap-y-2'>
      <span>惰性计算的值：{value}</span>
      <span>多次重渲染后值保持不变</span>
      <Button onClick={() => forceUpdate((c) => c + 1)}>触发重渲染</Button>
    </div>
  )
}

export default App
