'use client'
import { Tag, useMessage } from 'musae'

const Basic = () => {
  const [{ info }] = useMessage()

  return (
    <Tag
      size='small'
      closable
      onClose={() => {
        info('删除标签')
      }}
    >
      可删除标签
    </Tag>
  )
}

export default Basic
