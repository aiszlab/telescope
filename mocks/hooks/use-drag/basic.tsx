'use client'

import { useEffect, useRef } from 'react'
import { useDrag } from '@aiszlab/relax'

const App = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [state, { onDragStart, onDragMove, onDragEnd }] = useDrag()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.addEventListener('mousedown', onDragStart)
    window.addEventListener('mousemove', onDragMove)
    window.addEventListener('mouseup', onDragEnd)
    return () => {
      el.removeEventListener('mousedown', onDragStart)
      window.removeEventListener('mousemove', onDragMove)
      window.removeEventListener('mouseup', onDragEnd)
    }
  }, [onDragStart, onDragMove, onDragEnd])

  return (
    <div className='flex flex-col items-center gap-y-2'>
      <div
        ref={ref}
        className='flex h-32 w-64 cursor-grab items-center justify-center border border-dashed border-gray-400 select-none'
      >
        按下并拖拽
      </div>
      <span>是否拖拽中：{state.isDragging ? '是' : '否'}</span>
      <span>x：{state.x}，y：{state.y}</span>
      <span>movementX：{state.movementX}，movementY：{state.movementY}</span>
    </div>
  )
}

export default App
