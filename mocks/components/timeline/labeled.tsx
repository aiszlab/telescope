'use client'
import { Timeline } from 'musae'

const App = () => {
  return (
    <Timeline
      items={[
        {
          description: 'Create a services site',
          label: '2015-09-01 12:00:00'
        },
        {
          description: 'Solve initial network problems',
          label: '2015-09-01'
        },
        {
          description: 'Technical testing',
          label: '2015-09-01'
        },
        {
          description: 'Network problems being solved',
          label: '2015-09-01'
        }
      ]}
    />
  )
}

export default App
