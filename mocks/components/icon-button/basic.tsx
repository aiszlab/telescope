'use client'
import { IconButton, Space } from 'musae'
import { IconSearch } from 'musae/icons'

const App = () => {
  return (
    <Space gutter={8}>
      <IconButton variant='filled'>
        <IconSearch />
      </IconButton>
      <IconButton variant='outlined'>
        <IconSearch />
      </IconButton>
      <IconButton variant='text'>
        <IconSearch />
      </IconButton>
    </Space>
  )
}

export default App
