'use client'

import { useMounted, useBoolean } from '@aiszlab/relax'
import { useMessage, Button } from 'musae'

const HelloWorld = () => {
  const [messager, holder] = useMessage()

  useMounted(() => {
    messager.info('mounted')
  })

  return (
    <>
      {holder}
      <div>Hello World</div>
    </>
  )
}

const Basic = () => {
  const [isOn, { turnOn }] = useBoolean(false)

  return (
    <div>
      <Button onClick={turnOn}>{isOn ? 'unmount' : 'mount'}</Button>
      {isOn && <HelloWorld />}
    </div>
  )
}

export default Basic
