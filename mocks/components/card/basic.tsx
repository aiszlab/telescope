'use client'
import { Card, Space } from 'musae'

const App = () => {
  return (
    <Space orientation='vertical' gutter={16}>
      <Card variant='outlined'>
        <h3>Outlined 卡片</h3>
        <p>这是一个带边框的卡片样式，适用于信息分组展示。</p>
      </Card>
      <Card variant='elevated'>
        <h3>Elevated 卡片</h3>
        <p>这是一个带阴影的卡片样式，使其从背景中突出显示。</p>
      </Card>
      <Card variant='filled'>
        <h3>Filled 卡片</h3>
        <p>这是一个带填充背景的卡片样式，适用于内容区域。</p>
      </Card>
    </Space>
  )
}

export default App
