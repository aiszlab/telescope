'use client'
import { ConfigProvider, Button } from 'musae'

const App = () => {
  return (
    <ConfigProvider>
      <Button>支持全局配置的按钮</Button>
    </ConfigProvider>
  )
}

export default App
