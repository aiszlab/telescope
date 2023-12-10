'use client'

import { Tree, TreeProps } from 'musae'

const nodes: TreeProps['nodes'] = [
  {
    key: 'zhejiang',
    title: '浙江',
    children: [
      {
        key: 'hangzhou',
        title: '杭州',
        children: [
          {
            key: 'xihu',
            title: '西湖区'
          }
        ]
      },
      {
        key: 'shaoxing',
        title: '绍兴',
        children: []
      }
    ]
  }
]

const Basic = () => {
  return <Tree nodes={nodes} />
}

export default Basic
