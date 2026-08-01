'use client'

import { useState } from 'react'
import { Button } from 'musae'
import { useMemorized } from '@aiszlab/relax'

const App = () => {
  const [count, setCount] = useState(0)

  const { current, previous } = useMemorized(
    (prev) => ({ current: count, previous: prev?.current }),
    [count]
  )

  return (
    <div className='flex flex-col items-center gap-y-2'>
      <span>当前值：{current}</span>
      <span>上一次的值：{previous ?? '无'}</span>
      <Button onClick={() => setCount((c) => c + 1)}>增加</Button>
    </div>
  )
}

export default App
