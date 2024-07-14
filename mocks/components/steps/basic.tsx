'use client'
import { Steps } from 'musae'

const App = () => {
  return (
    <Steps
      value={1}
      items={[
        {
          title: 'Step 1',
          description: 'Step 1 description'
        },
        {
          title: 'Step 2',
          description: 'Step 2 description'
        },
        {
          title: 'Step 3',
          description: 'Step 3 description'
        }
      ]}
    />
  )
}

export default App
