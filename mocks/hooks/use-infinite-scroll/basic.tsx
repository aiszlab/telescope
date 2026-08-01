'use client'

import { useState } from 'react'
import { useInfiniteScroll } from '@aiszlab/relax'

const App = () => {
  const [items, setItems] = useState(() =>
    Array.from({ length: 10 }, (_, i) => i + 1)
  )

  const { sentinelRef, viewportRef } =
    useInfiniteScroll<HTMLDivElement, HTMLDivElement>({
      hasMore: items.length < 50,
      distance: 20,
      onLoadMore: () => {
        setItems((prev) => [
          ...prev,
          ...Array.from({ length: 10 }, (_, i) => prev.length + i + 1)
        ])
      }
    })

  return (
    <div
      ref={viewportRef}
      className='h-48 w-full overflow-auto border border-dashed border-gray-400'
    >
      {items.map((item) => (
        <div
          key={item}
          className='flex h-10 items-center justify-center border-b border-gray-100'
        >
          项目 {item}
        </div>
      ))}
      <div ref={sentinelRef} className='py-2 text-center text-sm text-gray-400'>
        {items.length < 50 ? '加载中...' : '没有更多了'}
      </div>
    </div>
  )
}

export default App
