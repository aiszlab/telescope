'use client'

import { useEffect, useState } from 'react'
import { Input } from 'musae'
import { useSessionStorageState } from '@aiszlab/relax'

const SessionStorageDemo = () => {
  const [value, setValue] = useSessionStorageState('relax:session-input')

  return (
    <div className='flex flex-col items-center gap-y-2'>
      <Input
        value={value ?? ''}
        placeholder='输入内容，关闭标签页后清除'
        onChange={(v) => setValue(v)}
      />
      <span>当前值：{value ?? '空'}</span>
    </div>
  )
}

const App = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return <SessionStorageDemo />
}

export default App
