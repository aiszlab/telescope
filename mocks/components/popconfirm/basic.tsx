'use client'
import { Popconfirm, Button } from 'musae'

const App = () => {
  return (
    <Popconfirm title='Are you sure?' content='确认需要删除当前行操作吗？'>
      <Button variant='text'>删除</Button>
    </Popconfirm>
  )
}

export default App
