'use client'
import { Select } from 'musae'

const Basic = () => {
  return (
    <Select
      options={[
        {
          value: '1',
          label: '选项1'
        },
        {
          value: '2',
          label: '选项2'
        }
      ]}
    />
  )
}

export default Basic
