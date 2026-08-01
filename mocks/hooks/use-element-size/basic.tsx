'use client'

import { useElementSize } from '@aiszlab/relax'

const App = () => {
  const [ref, { width, height }] = useElementSize<HTMLDivElement>()

  return (
    <div className='flex flex-col items-center gap-y-2'>
      <div
        ref={ref}
        className='flex h-32 w-64 items-center justify-center overflow-auto resize border border-dashed border-gray-400 p-2 text-sm'
      >
        拖拽右下角调整尺寸
      </div>
      <span>宽度：{width}px，高度：{height}px</span>
    </div>
  )
}

export default App
