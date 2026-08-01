'use client'

import { useState } from 'react'
import { Button } from 'musae'
import { useMutateObserver } from '@aiszlab/relax'

const App = () => {
  const [element, setElement] = useState<HTMLDivElement | null>(null)
  const [count, setCount] = useState(0)
  const [items, setItems] = useState<number[]>([1, 2, 3])

  useMutateObserver(element, () => {
    setCount((c) => c + 1)
  })

  return (
    <div className='flex flex-col items-center gap-y-2'>
      <div ref={setElement} className='flex flex-col gap-y-1'>
        {items.map((item) => (
          <span key={item}>项目 {item}</span>
        ))}
      </div>
      <span>DOM 变化次数：{count}</span>
      <div className='flex gap-x-2'>
        <Button onClick={() => setItems((prev) => [...prev, prev.length + 1])}>
          添加项目
        </Button>
        <Button onClick={() => setItems((prev) => prev.slice(0, -1))}>
          移除项目
        </Button>
      </div>
    </div>
  )
}

export default App
