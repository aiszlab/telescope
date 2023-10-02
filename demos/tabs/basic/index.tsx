'use client'

import { Tabs } from 'musae'

const Basic = () => {
  return (
    <Tabs
      items={[
        {
          key: '1',
          label: 'test'
        },
        {
          key: '2',
          label: 'kankan'
        },
        {
          key: '3',
          label: '测试2'
        }
      ]}
    />
  )
}

export default Basic
