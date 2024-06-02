'use client'
import { Progress } from 'musae'

const App = () => {
  return (
    <div className='w-full flex flex-col gap-1'>
      <Progress variant='circular' value={0} />
      <Progress variant='circular' value={10} />
      <Progress variant='circular' value={50} />
      <Progress variant='circular' value={99} />
      <Progress variant='circular' value={100} />
    </div>
  )
}

export default App
