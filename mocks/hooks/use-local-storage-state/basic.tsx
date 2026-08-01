'use client'

import { Input } from 'musae'
import { useLocalStorageState } from '@aiszlab/relax'

const App = () => {
  const [value, setValue] = useLocalStorageState('relax:local-input')

  return (
    <div className='flex flex-col items-center gap-y-2'>
      <Input
        value={value ?? ''}
        placeholder='输入内容，刷新页面仍保留'
        onChange={(v) => setValue(v)}
      />
      <span>当前值：{value ?? '空'}</span>
    </div>
  )
}

export default App
