'use client'
import { useDebounceCallback } from '@aiszlab/relax'
import { useMessage, Input } from 'musae'

const App = () => {
  const [messager, holder] = useMessage()
  const { next: search } = useDebounceCallback((value: string) => {
    messager.info(`你正在尝试搜索：${value}`)
  }, 2000)

  return (
    <div>
      {holder}
      <Input onChange={search} placeholder='尝试搜索' />
    </div>
  )
}

export default App
