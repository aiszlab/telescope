'use client'

import { useMount, useBoolean } from '@aiszlab/relax'
import { useMessage, Button } from 'musae'

const MyComponent = () => {
  const [messager, holder] = useMessage()

  useMount(() => {
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
    <div>
      <Button onClick={toggle}>{isOn ? 'unmount' : 'mount'}</Button>
      {isOn && <MyComponent />}
    </div>
  )
}

export default Basic
