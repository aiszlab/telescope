'use client'
import { Timeline } from 'musae'
import { CheckCircle } from 'musae/icons'

const App = () => {
  return (
    <Timeline
      items={[
        {
          description: 'Create a services site 2015-09-01',
          dot: <CheckCircle />
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
