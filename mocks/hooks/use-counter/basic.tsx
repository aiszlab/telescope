'use client'

import { useCounter } from '@aiszlab/relax'
import { KeyboardArrowLeft, KeyboardArrowRight } from 'musae/icons'
import { IconButton } from 'musae'

const App = () => {
  const [count, { add, subtract }] = useCounter(0)

  const _add = () => add()
  const _subtract = () => subtract()

  return (
    <div className='flex gap-x-2 items-center'>
      <IconButton onClick={_subtract}>
        <KeyboardArrowLeft />
      </IconButton>

      <span>{count}</span>

      <IconButton onClick={_add}>
        <KeyboardArrowRight />
      </IconButton>
    </div>
  )
}

export default App
