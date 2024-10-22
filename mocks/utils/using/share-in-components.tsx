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

const Counter = (props: { children: string }) => {
  const { add, count } = useCount()
  return (
    <div onClick={add}>
      点击了{count}次<button>{props.children}</button>
    </div>
  )
}

const Counters = () => {
  return (
    <>
      <Counter>第一个按钮</Counter>
      <Counter>第二个按钮</Counter>
    </>
  )
}

export default Counters
