'use client'

import { useState } from 'react'
import { useScroll } from '@aiszlab/relax'

const App = () => {
  const [scrollY, setScrollY] = useState(0)

  useScroll(() => {
    setScrollY(window.scrollY)
  })

  return (
    <div>
      <div className='sticky top-0 bg-white/80 py-2 text-center'>
        当前滚动位置：{scrollY}px
      </div>
      <div className='flex flex-col gap-y-4 py-4'>
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className='flex h-16 items-center justify-center bg-gray-100'
          >
            占位行 {i + 1}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
