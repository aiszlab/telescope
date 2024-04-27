'use client'

import { Tree, TreeNode } from 'musae'

const NODES: TreeNode[] = [
  {
    key: 'node-1',
    title: '节点1',
    children: [
      {
        key: 'leaf-1',
        title: '叶子1'
      }
    ]
  }
]

const Basic = () => {
  return <Tree nodes={NODES} className='w-64' />
}

export default Basic
