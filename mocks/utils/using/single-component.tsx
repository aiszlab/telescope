'use client'
import { using } from '@aiszlab/relax/react'

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
    <div onClick={add}>
      点击了{count}次<button>点击</button>
    </div>
  )
}

export default Counter
