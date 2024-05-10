'use client'
import { Steps } from 'musae'
import { CheckCircle, Close, Done } from 'musae/icons'

const App = () => {
  return (
    <Steps
      value={1}
      items={[
        {
          leading: <CheckCircle size={40} />,
          title: 'Step 1',
          description: 'Step 1 description'
        },
        {
          leading: <Close size={40} />,
          title: 'Step 2',
          description: 'Step 2 description'
        },
        {
          leading: <Done size={40} />,
          title: 'Step 3',
          description: 'Step 3 description'
        }
      ]}
    />
  )
}

export default App
