'use client'

import { useState } from 'react'
import { Button } from 'musae'
import { useLazyMemo } from '@aiszlab/relax'

const App = () => {
  const [count, setCount] = useState(0)

  const memo = useLazyMemo(() => {
    // 模拟耗时计算
    let result = 0
    for (let i = 0; i < 10000000; i++) {
      result += i
    }
    return result + count
  }, [count])

  return (
    <div className='flex flex-col items-center gap-y-2'>
      <span>计数：{count}</span>
      <span>计算结果：{memo.value}</span>
      <Button onClick={() => setCount((c) => c + 1)}>增加</Button>
    </div>
  )
}

export default App
