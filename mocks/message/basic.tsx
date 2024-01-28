'use client'

import { useMessage, Button } from 'musae'

const Basic = () => {
  const [messager, holder] = useMessage()

  const click = () => {
    messager.error()
  }

  return (
    <>
      {holder}
      <Button onClick={click}>提示消息</Button>
    </>
  )
}

export default Basic
