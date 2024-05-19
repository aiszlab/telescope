'use client'

import { useCounter } from '@aiszlab/relax'
import { KeyboardArrowLeft, KeyboardArrowRight } from 'musae/icons'
import { Button } from 'musae'

const App = () => {
  const [count, { add, subtract }] = useCounter(0)

  const _add = () => add()
  const _subtract = () => subtract()

  return (
    <div className='flex gap-x-2 items-center'>
      <Button prefix={<KeyboardArrowLeft />} onClick={_subtract} shape='circular' />
      <span>{count}</span>
      <Button prefix={<KeyboardArrowRight />} onClick={_add} shape='circular' />
    </div>
  )
}

export default App
