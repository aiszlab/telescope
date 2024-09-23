'use client'
import { Tree } from 'musae'
import type { TreeNode } from 'musae/types/tree'

const NODES: TreeNode[] = [
  {
    key: 'node-1',
    title: '节点1',
    children: [
      {
        key: 'leaf-1',
        title: '叶子1',
        children: [
          {
            key: 'child-1',
            title: '子节点1'
          },
          {
            key: 'child-2',
            title: '子节点2'
          }
        ]
      }
    ]
  }
]

const App = () => {
  return <Tree nodes={NODES} className='w-64' />
}

export default App
