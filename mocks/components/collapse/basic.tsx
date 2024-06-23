'use client'
import { Collapse } from 'musae'

const App = () => {
  return (
    <Collapse
      items={[
        {
          key: '1',
          label: 'Collapse 1',
          children: 'Content of the first panel'
        },
        {
          key: '2',
          label: 'Collapse 2',
          children: 'Content of the second panel'
        },
        {
          key: '3',
          label: 'Collapse 3',
          children: 'Content of the third panel'
        }
      ]}
    />
  )
}

export default App
