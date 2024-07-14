'use client'
import { useMessage, Button } from 'musae'

const App = () => {
  const [messager, holder] = useMessage()

  const click = () => {
    messager.error({
      description: '展示一个普通的错误消息！'
    })
  }

  return (
    <>
      {holder}
      <Button onClick={click}>提示消息</Button>
    </>
  )
}

export default App
