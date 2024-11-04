'use client'
import { Chat } from 'musae'
import { interval, take } from 'rxjs'
import type { ChatProps } from 'musae/types/chat'

const MESSAGES = [
  '你好！',
  '欢迎使用',
  ' Chat 组件',
  '使用过程',
  '中',
  '存在任何',
  '问题',
  '可以',
  '在 Github ',
  'Issue 中反馈。'
]

const App = () => {
  const messageHandler: ChatProps['onMessage'] = (send, { next, complete, error }) => {
    interval(300)
      .pipe(take(MESSAGES.length))
      .subscribe({
        next: (_) => {
          next(MESSAGES[_])
        },
        complete,
        error
      })
  }

  return (
    <Chat
      onMessage={messageHandler}
      defaultValue={[
        {
          message: '你好，你是谁？',
          content: '我是chat面板，用于展示对话历史记录'
        }
      ]}
    />
  )
}

export default App
