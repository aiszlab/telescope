'use client'
import { useClickAway } from '@aiszlab/relax'
import { Button, Message } from 'musae'
import { useRef } from 'react'

const App = () => {
  const ref = useRef<HTMLDivElement>(null)

  useClickAway(() => {
    Message.error({
      description: '点击外侧'
    })
  }, [ref])

  const click = () => {
    Message.success({
      description: '点击内侧'
    })
  }

  return (
    <div ref={ref}>
      <Button onClick={click}>click in</Button>
    </div>
  )
}

export default App
