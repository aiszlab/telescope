'use client'

import { useDefault } from '@aiszlab/relax'
import { useState } from 'react'
import { Input } from 'musae'

const App = () => {
  const [value, setValue] = useState('给定一个默认值')
  const defaultValue = useDefault(value)

  return (
    <div>
      <Input value={value} onChange={setValue} />
      {defaultValue}
    </div>
  )
}

export default App
