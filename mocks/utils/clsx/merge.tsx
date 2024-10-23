'use client'
import { clsx } from '@aiszlab/relax'
import { Button } from 'musae'
import { useState } from 'react'

const CLASS_NAMES = [
  'test-1',
  false && 'test-2',
  true && 'test-3',
  ['test-array-item-1', 'test-array-item-2'],
  {
    'test-object-item-1': true,
    'test-object-item-2': false
  }
]

const Merge = () => {
  const [className, setClassName] = useState('')

  const merge = () => {
    setClassName(clsx(CLASS_NAMES))
  }

  const reset = () => {
    setClassName('')
  }

  return (
    <div>
      <div>
        原JSON值：<span>{JSON.stringify(CLASS_NAMES)}</span>
      </div>
      <div>
        合并结果：<span>{className}</span>
      </div>
      <div>
        <Button onClick={merge}>点击合并</Button>
        <Button onClick={reset}>清除</Button>
      </div>
    </div>
  )
}

export default Merge
