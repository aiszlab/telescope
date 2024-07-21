'use client'
import { Button, Drawer } from 'musae'
import { useState } from 'react'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>打开抽屉</Button>
      <Drawer open={isOpen} onClose={onClose} title='自定义关闭方式' closable={['esc', 'close']}>
        点击蒙层不关闭抽屉
      </Drawer>
    </>
  )
}

export default App
