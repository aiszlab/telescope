'use client'
import { Tag, useMessage } from 'musae'

const App = () => {
  const [{ info }] = useMessage()

  return (
    <Tag
      size='small'
      closable
      onClose={() => {
        info({ description: '删除标签' })
      }}
    >
      可删除标签
    </Tag>
  )
}

export default App
