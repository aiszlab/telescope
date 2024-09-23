'use client'
import { Select } from 'musae'
import { useState } from 'react'
import type { Option } from 'musae/types/option'

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
