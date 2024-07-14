'use client'
import { Steps } from 'musae'
import { CheckCircle, Close } from 'musae/icons'

const App = () => {
  return (
    <Steps
      value={1}
      type='vertical'
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
          title: 'Step 3',
          description: 'Step 3 description'
        }
      ]}
    />
  )
}

export default App
