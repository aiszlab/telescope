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

const Counter = (props: { children: string }) => {
  const { add, count } = useCount()

  return (
    <div>
      <div>点击了{count}次</div>
      <Button variant='text' onClick={add}>
        {props.children}
      </Button>
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
