'use client'
import { useMessage, Button, type Message, Space } from 'musae'

const METHODS: Exclude<keyof typeof Message, 'open'>[] = ['info', 'success', 'warning', 'error']

const App = () => {
  const [messager, holder] = useMessage()

  return (
    <Space>
      {holder}
      {METHODS.map((method) => {
        return (
          <Button
            variant='text'
            onClick={() => {
              messager[method]({
                description: `展示一个普通的${method}消息！`
              })
            }}
            key={method}
          >
            {method}
          </Button>
        )
      })}
    </Space>
  )
}

export default App
