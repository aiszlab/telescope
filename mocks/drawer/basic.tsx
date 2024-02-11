'use client'

import { Button, Drawer } from 'musae'
import { useState } from 'react'

const Basic = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>打开抽屉</Button>
      <Drawer open={isOpen} onClose={onClose} />
    </>
  )
}

export default Basic
