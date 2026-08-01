'use client'

import { Button } from 'musae'
import { useReactive } from '@aiszlab/relax'

const App = () => {
  const reactive = useReactive(0)

  return (
    <div className='flex flex-col items-center gap-y-2'>
      <span>当前值：{reactive.value}</span>
      <div className='flex gap-x-2'>
        <Button onClick={() => (reactive.value = reactive.value + 1)}>增加</Button>
        <Button onClick={() => (reactive.value = reactive.value - 1)}>减少</Button>
      </div>
    </div>
  )
}

export default App
