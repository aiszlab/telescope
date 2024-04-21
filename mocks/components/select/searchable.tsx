'use client'
import { Select } from 'musae'

const Searchable = () => {
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
      searchable
    />
  )
}

export default Searchable
