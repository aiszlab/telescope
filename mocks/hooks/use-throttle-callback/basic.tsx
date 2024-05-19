'use client'

import { useThrottleCallback } from '@aiszlab/relax'
import { useMessage, Input } from 'musae'

const App = () => {
  const [messager, holder] = useMessage()
  const { next: search } = useThrottleCallback((value: string) => {
    messager.info(`你首次编辑内容为：${value}`)
  }, 2000)

  return (
    <div>
      {holder}
      <Input onChange={search} />
    </div>
  )
}

export default App
