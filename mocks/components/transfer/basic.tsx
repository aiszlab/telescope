'use client'
import { Transfer } from 'musae'

const App = () => {
  return (
    <Transfer
      options={[
        {
          label: 'Item 1',
          value: '1'
        },
        {
          label: 'Item 2',
          value: '2'
        },
        {
          label: 'Item 3',
          value: '3'
        }
      ]}
    />
  )
}

export default App
