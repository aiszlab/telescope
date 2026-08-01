'use client'

import { useScreenSize } from '@aiszlab/relax'

const App = () => {
  const { width, height } = useScreenSize()

  return (
    <div className='flex flex-col items-center gap-y-2'>
      <span>视口宽度：{width}px</span>
      <span>视口高度：{height}px</span>
    </div>
  )
}

export default App
