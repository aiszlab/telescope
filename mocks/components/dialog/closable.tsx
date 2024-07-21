'use client'
import { Button, Dialog } from 'musae'
import { useState } from 'react'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>打开弹窗</Button>
      <Dialog open={isOpen} onClose={onClose} title='自定义关闭方式' closable={['esc', 'close']}>
        点击蒙层不关闭弹窗
      </Dialog>
    </>
  )
}

export default App
