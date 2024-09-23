'use client'
import { Tree, Switch, Space } from 'musae'
import { useState } from 'react'
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
  const [isSelectable, setIsSelectable] = useState(false)

  return (
    <Space orientation='vertical'>
      <Switch checkedChildren='可选' uncheckedChildren='不可选' onChange={setIsSelectable} value={isSelectable} />
      <Tree nodes={NODES} selectable={isSelectable} />
    </Space>
  )
}

export default App
