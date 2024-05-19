'use client'
import { Select, type Option } from 'musae'

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
