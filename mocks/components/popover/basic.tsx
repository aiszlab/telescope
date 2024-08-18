'use client'
import { Popover, Button } from 'musae'

const App = () => {
  return (
    <Popover title='新增一个元素' content='点击新增一个元素'>
      <Button>add</Button>
    </Popover>
  )
}

export default App
