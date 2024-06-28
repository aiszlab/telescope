'use client'

import { Tabs } from 'musae'

const ITEMS = Array.from({ length: 10 })
  .fill(0)
  .map((item, index) => {
    return {
      key: index,
      label: `tab ${index}`,
      children: `body panel ${index}`
    }
  })

const App = () => {
  return <Tabs items={ITEMS} />
}

export default App
