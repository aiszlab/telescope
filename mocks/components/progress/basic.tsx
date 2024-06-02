'use client'
import { Progress } from 'musae'

const App = () => {
  return (
    <div className='w-full flex flex-col gap-1'>
      <Progress value={0} />
      <Progress value={10} />
      <Progress value={50} />
      <Progress value={100} />
    </div>
  )
}

export default App
