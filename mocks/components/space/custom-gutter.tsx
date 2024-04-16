'use client'
import { Space, Tag } from 'musae'

const CustomGutter = () => {
  return (
    <Space gutter={32}>
      <Tag>第一个标签</Tag>
      <Tag>第二个标签</Tag>
    </Space>
  )
}

export default CustomGutter
