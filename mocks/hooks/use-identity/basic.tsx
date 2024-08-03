'use client'
import { useIdentity } from '@aiszlab/relax'
import { Message, Button } from 'musae'

const App = () => {
  const [id, uniqueId] = useIdentity()

  const create = () => {
    const _id = uniqueId()

    Message.info({
      description: _id
    })
  }

  return (
    <div>
      <div className='flex gap-2'>
        <label>组件ID</label>
        <label>{id}</label>
      </div>

      <div>
        <Button onClick={create}>create unique id</Button>
      </div>
    </div>
  )
}

export default App
