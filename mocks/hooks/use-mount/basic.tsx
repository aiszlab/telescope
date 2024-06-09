'use client'

import { useMount, useBoolean } from '@aiszlab/relax'
import { useMessage, Button } from 'musae'

const HelloWorld = () => {
  const [messager, holder] = useMessage()

  useMount(() => {
    messager.info({ description: 'mount' })
  })

  return (
    <>
      {holder}
      <div>Hello World</div>
    </>
  )
}

const App = () => {
  const [isOn, { toggle }] = useBoolean(false)

  return (
    <div>
      <Button onClick={toggle}>{isOn ? 'unmount' : 'mount'}</Button>
      {isOn && <HelloWorld />}
    </div>
  )
}

export default App
