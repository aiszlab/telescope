'use client'
import { useScrollLocker, useBoolean } from '@aiszlab/relax'
import { Button } from 'musae'

const App = () => {
  const [isLocked, { toggle }] = useBoolean()

  useScrollLocker(isLocked)

  return (
    <div>
      <Button onClick={toggle}>{isLocked ? 'Unlock' : 'Lock'}</Button>
    </div>
  )
}

export default App
