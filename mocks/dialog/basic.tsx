'use client'

import { Button, Dialog } from 'musae'
import { useState } from 'react'

const Basic = () => {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <>
      <Button onClick={() => setIsOpened(true)}>打开弹窗</Button>
      <Dialog isOpened={isOpened} />
    </>
  )
}

export default Basic
