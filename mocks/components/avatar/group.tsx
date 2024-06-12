'use client'

import { Avatar, Space } from 'musae'

const App = () => {
  return (
    <Space type='vertical'>
      <Avatar.Group>
        <Avatar src='https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80' alt='Jack' />
        <Avatar
          src='https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80'
          alt='Bob'
        />
        <Avatar src='https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80' alt='Jack' />
      </Avatar.Group>
      <Avatar.Group>
        <Avatar src='https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80' alt='Jack' />
        <Avatar
          src='https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80'
          alt='Bob'
        />
        <Avatar src='https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80' alt='Jack' />
        <Avatar
          src='https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80'
          alt='Bob'
        />
        <Avatar src='https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80' alt='Jack' />
      </Avatar.Group>
    </Space>
  )
}

export default App
