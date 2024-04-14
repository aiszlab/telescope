'use client'
import { Space, Chip } from 'musae'

const CustomGutter = () => {
  return (
    <Space gutter={32}>
      <Chip>第一个标签</Chip>
      <Chip>第二个标签</Chip>
    </Space>
  )
}

export default CustomGutter
