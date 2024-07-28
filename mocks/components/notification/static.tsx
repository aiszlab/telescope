'use client'
import { Notification, Button } from 'musae'

const App = () => {
  return (
    <Button
      onClick={() => {
        Notification.success({
          description: '这是一条提示消息',
          title: '提示消息',
          duration: 3000,
          closable: true
        })
      }}
    >
      提示消息
    </Button>
  )
}

export default App
