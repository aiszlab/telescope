'use client'

import { useDevicePixelRatio } from '@aiszlab/relax'

const App = () => {
  const dpr = useDevicePixelRatio()

  return (
    <div className='flex flex-col items-center gap-y-2'>
      <span>设备像素比：{dpr}</span>
    </div>
  )
}

export default App
