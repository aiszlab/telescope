'use client'
import { Select } from 'musae'
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

const App = () => {
  return <Select options={OPTIONS} />
}

export default App
