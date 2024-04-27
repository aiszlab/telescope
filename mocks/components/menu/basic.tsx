'use client'
import { Menu } from 'musae'

const ITEMS = [
  {
    label: '导航菜单 1',
    key: 'navigation-1',
    children: [
      {
        label: '条目 1',
        key: 'item-1',
        children: [
          {
            label: '选项 1',
            key: 'option-1'
          },
          {
            label: '选项 2',
            key: 'option-2'
          }
        ]
      },
      {
        label: '条目 2',
        key: 'item-2',
        children: [
          {
            label: '选项 3',
            key: 'option-3'
          },
          {
            label: '选项 4',
            key: 'option-4'
          }
        ]
      }
    ]
  }
]

const Basic = () => {
  return <Menu items={ITEMS} selectedKeys={['option-3']} className='w-64' />
}

export default Basic
