'use client'
import { Badge, Avatar, Space } from 'musae'

const App = () => {
  return (
    <Space gutter={20}>
      <Badge content='2' placement='top-left'>
        <Avatar alt='Jack' />
      </Badge>

      <Badge content='2' placement='top-right'>
        <Avatar alt='Jack' />
      </Badge>

      <Badge content='2' placement='bottom-right'>
        <Avatar alt='Jack' />
      </Badge>

      <Badge content='2' placement='bottom-left'>
        <Avatar alt='Jack' />
      </Badge>
    </Space>
  )
}

export default App
