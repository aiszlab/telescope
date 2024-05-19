'use client'

import { memo, useEffect, useRef } from 'react'
import { Button } from 'musae'
import { useEvent, useForceUpdate } from '@aiszlab/relax'

const HelloWorld = (props: { onClick: () => void }) => {
  const count = useRef(1)

  useEffect(() => {
    count.current = count.current + 1
  })

  return <Button onClick={props.onClick}>{`第${count.current}次渲染`}</Button>
}

const Memorized = memo(HelloWorld)

const App = () => {
  const [, forceUpdate] = useForceUpdate()

  const click = useEvent(() => {
    forceUpdate()
  })

  return (
    <div className='flex gap-x-3'>
      <Memorized onClick={click} />
      <HelloWorld onClick={click} />
      <Memorized onClick={() => forceUpdate()} />
    </div>
  )
}

export default App
