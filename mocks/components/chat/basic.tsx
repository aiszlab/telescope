'use client'
import { Chat } from 'musae'
import type { ChatProps } from 'musae/types/chat'

const MESSAGES = new Map<string, string>([
  ['你好', '你好，欢迎使用chat面板'],
  ['你会干嘛', '我只能输出消息展示给用户']
])

const App = () => {
  const messageHandler: ChatProps['onMessage'] = (send, { next, complete }) => {
    next(MESSAGES.get(send) ?? '抱歉！我不能理解你说的话！')
    complete()
  }

  return <Chat onMessage={messageHandler} />
}

export default App
