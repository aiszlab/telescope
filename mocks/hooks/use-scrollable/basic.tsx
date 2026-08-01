'use client'

import { Button } from 'musae'
import { useScrollable } from '@aiszlab/relax'

const App = () => {
  const { targetRef, scrollTo, to, setTrigger } =
    useScrollable<HTMLDivElement, HTMLDivElement>()

  return (
    <div className='flex flex-col items-center gap-y-2'>
      <div className='flex gap-x-2'>
        <Button onClick={() => scrollTo(to('a'), 300)}>滚动到 A</Button>
        <Button onClick={() => scrollTo(to('b'), 300)}>滚动到 B</Button>
        <Button onClick={() => scrollTo(to('c'), 300)}>滚动到 C</Button>
      </div>
      <div
        ref={targetRef}
        className='h-40 w-full overflow-auto border border-dashed border-gray-400'
      >
        <div
          ref={(el) => setTrigger('a', el)}
          className='flex h-40 items-center justify-center bg-red-50'
        >
          区块 A
        </div>
        <div
          ref={(el) => setTrigger('b', el)}
          className='flex h-40 items-center justify-center bg-green-50'
        >
          区块 B
        </div>
        <div
          ref={(el) => setTrigger('c', el)}
          className='flex h-40 items-center justify-center bg-blue-50'
        >
          区块 C
        </div>
      </div>
    </div>
  )
}

export default App
