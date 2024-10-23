'use client'
import { first } from '@aiszlab/relax'

const ITEMS = ['test-1', 'test-2', 'test-3']

const First = () => {
  return (
    <div>
      <div>
        原JSON值：<span>{JSON.stringify(ITEMS)}</span>
      </div>
      <div>
        执行结果：<span>{first(ITEMS)}</span>
      </div>
    </div>
  )
}

export default First
