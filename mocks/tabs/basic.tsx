import { Tabs } from 'musae'

const ITEMS = [
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
]

const Basic = () => {
  return <Tabs items={ITEMS} />
}

export default Basic
