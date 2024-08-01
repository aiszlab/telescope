'use client'

import { useBoolean, useUnmount } from '@aiszlab/relax'
import { Message, Button } from 'musae'

const HelloWorld = () => {
  useUnmount(() => {
    Message.info({ description: 'unmount' })
  })

  return <div>Hello World</div>
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
