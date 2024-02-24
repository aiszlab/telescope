'use client'

import { useMounted, useBoolean } from '@aiszlab/relax'
import { useMessage, Button } from 'musae'
import React from 'react'

const MyComponent = () => {
  const [messager, holder] = useMessage()

  useMounted(() => {
    messager.info('mount')
  })

  return (
    <>
      {holder}
      <div>Hello World</div>
    </>
  )
}

const Basic = () => {
  const { isOn, toggle } = useBoolean(false)

  return (
    <>
      <Button onClick={toggle}>{isOn ? 'unmount' : 'mount'}</Button>
      {isOn && <MyComponent />}
    </>
  )
}

export default Basic
