'use client'

import { useBoolean } from '@aiszlab/relax'
import { Dialog, Button } from 'musae'

const Basic = () => {
  const { isOn, turnOn, turnOff } = useBoolean(false)

  return (
    <>
      <Button onClick={turnOn}>打开抽屉</Button>
      <Dialog isOpened={isOn} onCancel={turnOff} />
    </>
  )
}

export default Basic
