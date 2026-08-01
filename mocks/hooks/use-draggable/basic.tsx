'use client'

import { useDraggable } from '@aiszlab/relax'

const App = () => {
  const [ref, dragState] = useDraggable<HTMLDivElement>()

  return (
    <div className='flex flex-col items-center gap-y-2'>
      <div
        ref={ref}
        className='flex h-32 w-64 cursor-grab items-center justify-center border border-dashed border-gray-400 select-none active:cursor-grabbing'
      >
        拖拽我
      </div>
      <span>是否拖拽中：{dragState.isDragging ? '是' : '否'}</span>
      <span>x：{dragState.x}，y：{dragState.y}</span>
      <span>movementX：{dragState.movementX}，movementY：{dragState.movementY}</span>
    </div>
  )
}

export default App
