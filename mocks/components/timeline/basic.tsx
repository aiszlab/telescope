'use client'
import { Timeline } from 'musae'

const App = () => {
  return (
    <Timeline
      items={[
        {
          description: 'Create a services site 2015-09-01'
        },
        {
          description: 'Solve initial network problems 2015-09-01'
        },
        {
          description: 'Technical testing 2015-09-01'
        },
        {
          description: 'Network problems being solved 2015-09-01'
        }
      ]}
    />
  )
}

export default App
