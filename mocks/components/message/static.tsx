'use client'
import { Message, Button } from 'musae'

const App = () => {
  return (
    <Button
      onClick={() => {
        Message.success({
          description: '这是一条提示消息',
          duration: 3000
        })
      }}
    >
      提示消息
    </Button>
  )
}

export default App
