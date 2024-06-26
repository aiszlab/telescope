'use client'

import { useMounted, useBoolean } from '@aiszlab/relax'
import { useMessage, Button } from 'musae'

const HelloWorld = () => {
  const [messager, holder] = useMessage()

  useMounted(() => {
    messager.info({ description: 'mounted' })
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
