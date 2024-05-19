'use client'
import { useUpdateEffect } from '@aiszlab/relax'
import { useEffect, useState } from 'react'
import { Button, useMessage } from 'musae'

const App = () => {
  const [count, setCount] = useState(0)
  const [{ info }, holder] = useMessage()

  useUpdateEffect(() => {
    info('更新的副作用起作用啦！')
  }, [count])

  useEffect(() => {
    info('普通副作用起作用啦！')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count])

  const click = () => {
    setCount((prev) => prev + 1)
  }

  return (
    <>
      <Button onClick={click}>触发重新渲染</Button>
      {holder}
    </>
  )
}

export default App
