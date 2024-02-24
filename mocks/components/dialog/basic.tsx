'use client'

import { Button, Dialog } from 'musae'
import { useState } from 'react'

const Basic = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>打开弹窗</Button>
      <Dialog open={isOpen} onClose={onClose} title='基本使用'>
        这是一个弹窗的基本使用方法
      </Dialog>
    </>
  )
}

export default Basic
