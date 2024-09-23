'use client'
import { Select } from 'musae'
import type { Option } from 'musae/types/option'

const OPTIONS: Option[] = [
  {
    value: 'jack',
    label: '杰克'
  },
  {
    value: 'tom',
    label: '汤姆'
  },
  {
    value: 'bob',
    label: '鲍勃'
  }
]

const Multiple = () => {
  return <Select options={OPTIONS} mode='multiple' />
}

export default Multiple
