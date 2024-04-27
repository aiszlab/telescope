'use client'
import { Select, type Option } from 'musae'
import { useState } from 'react'

const OPTIONS: Option[] = [
  {
    value: '1',
    label: '选项1'
  },
  {
    value: '2',
    label: '选项2'
  }
]

const Controlled = () => {
  const [value, setValue] = useState<string>()

  return (
    <Select
      value={value}
      onChange={(selected) => {
        setValue(selected as string)
      }}
      options={OPTIONS}
    />
  )
}

export default Controlled
