'use client'

import { Select } from 'musae'

const Multiple = () => {
  return (
    <Select
      mode='multiple'
      options={[
        {
          value: 'allen',
          label: '艾伦'
        },
        {
          value: 'Jack',
          label: '杰克'
        },
        {
          value: 'Bob',
          label: '鲍勃'
        }
      ]}
    />
  )
}

export default Multiple
