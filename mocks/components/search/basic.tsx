'use client'
import { Search } from 'musae'
import { useState } from 'react'

const App = () => {
  const [value, setValue] = useState('')

  return (
    <Search
      value={value}
      onChange={setValue}
      placeholder='搜索内容...'
      onSearch={(keyword) => console.log('搜索:', keyword)}
    />
  )
}

export default App
