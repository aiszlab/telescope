'use client'

import { useEffect, useRef } from 'react'
import { Button } from 'musae'
import { useForceUpdate } from '@aiszlab/relax'

const Basic = () => {
  const [, forceUpdate] = useForceUpdate()
  const count = useRef(1)

  useEffect(() => {
    count.current = count.current + 1
  })

  const click = () => {
    forceUpdate()
  }

  return <Button onClick={click}>{`第${count.current}次渲染`}</Button>
}

export default Basic
