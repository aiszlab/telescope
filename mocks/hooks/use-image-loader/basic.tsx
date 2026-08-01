'use client'

import { useState } from 'react'
import { Button } from 'musae'
import { useImageLoader } from '@aiszlab/relax'

const App = () => {
  const [src, setSrc] = useState('https://picsum.photos/200/120')

  const status = useImageLoader({ src })

  return (
    <div className='flex flex-col items-center gap-y-2'>
      <span>状态：{status}</span>
      {status === 'loaded' && (
        <img src={src} alt='preview' style={{ width: 200, height: 120 }} />
      )}
      <div className='flex gap-x-2'>
        <Button onClick={() => setSrc(`https://picsum.photos/200/120?random=${Date.now()}`)}>
          加载有效图片
        </Button>
        <Button onClick={() => setSrc('https://invalid.url/not-an-image.png')}>
          加载无效图片
        </Button>
      </div>
    </div>
  )
}

export default App
