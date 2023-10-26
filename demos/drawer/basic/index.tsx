'use client'

import { useBoolean } from '@aiszlab/relax'
import { Drawer, Button } from 'musae'

const Basic = () => {
  const { isOn, turnOn, turnOff } = useBoolean(false)

  return (
    <>
      <Button onClick={turnOn}>打开抽屉</Button>
      <Drawer isOpened={isOn} onClose={turnOff} />
    </>
  )
}

export default Basic
