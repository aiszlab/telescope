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

  const onChange = (selectedValue: string) => {
    setValue(selectedValue)
  }

  return <Select value={value} onChange={onChange} options={OPTIONS} />
}

export default Controlled
