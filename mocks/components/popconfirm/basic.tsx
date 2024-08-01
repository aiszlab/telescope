'use client'
import { Popconfirm, Button } from 'musae'

const App = () => {
  return (
    <Popconfirm title='新增一个元素' description='点击新增一个元素'>
      <Button>add</Button>
    </Popconfirm>
  )
}

export default App
