'use client'
import { useScrollLocker, useBoolean } from '@aiszlab/relax'
import { Button } from 'musae'

const App = () => {
  const [isLocked, { toggle }] = useBoolean()

  useScrollLocker(isLocked)

  return (
    <div>
      <div className='h-screen bg-slate-500 text-white flex items-center justify-center'>使用内容填充</div>
      <Button className='mt-3' onClick={toggle}>
        {isLocked ? 'Unlock' : 'Lock'}
      </Button>
    </div>
  )
}

export default App
