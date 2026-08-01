'use client'

import { useState } from 'react'
import { Button } from 'musae'
import { useIsMounted } from '@aiszlab/relax'

const Child = () => {
  const isMounted = useIsMounted({ rerender: true })
  return <span>子组件已挂载：{isMounted() ? '是' : '否'}</span>
}

const App = () => {
  const [mounted, setMounted] = useState(true)

  return (
    <div className='flex flex-col items-center gap-y-2'>
      {mounted && <Child />}
      <Button onClick={() => setMounted((v) => !v)}>
        {mounted ? '卸载子组件' : '挂载子组件'}
      </Button>
    </div>
  )
}

export default App
