'use client'

import { useMediaQuery } from '@aiszlab/relax'

const App = () => {
  const [isDark, isMobile] = useMediaQuery([
    '(prefers-color-scheme: dark)',
    '(max-width: 768px)'
  ])

  return (
    <div className='flex flex-col items-center gap-y-2'>
      <span>深色模式：{isDark ? '是' : '否'}</span>
      <span>移动端断点（≤768px）：{isMobile ? '是' : '否'}</span>
    </div>
  )
}

export default App
