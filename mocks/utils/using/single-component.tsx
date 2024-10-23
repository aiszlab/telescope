'use client'
import { using } from '@aiszlab/relax/react'
import { Button } from 'musae'

const useCount = using<{
  count: number
  add: () => void
}>((setState) => {
  return {
    count: 0,
    add: () => setState((state) => ({ ...state, count: state.count + 1 }))
  }
})

const Counter = () => {
  const { add, count } = useCount()

  return (
    <div>
      <div>点击了{count}次</div>
      <Button variant='text' onClick={add}>
        点击
      </Button>
    </div>
  )
}

export default Counter
