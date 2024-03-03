'use client'

import { Switch, Button } from 'musae'
import { useBoolean } from '@aiszlab/relax'

const Basic = () => {
  const [isOn, { turnOn, turnOff, toggle }] = useBoolean()

  return (
    <div className='flex flex-col items-center gap-y-2'>
      <Switch value={isOn} />
      <div className='flex gap-x-2'>
        <Button onClick={turnOn}>设置为 true</Button>
        <Button onClick={toggle}>相反值</Button>
        <Button onClick={turnOff}>设置为 false</Button>
      </div>
    </div>
  )
}

export default Basic
