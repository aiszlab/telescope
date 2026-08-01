'use client'
import { Ellipsis } from 'musae'

const App = () => {
  return (
    <div style={{ width: 300 }}>
      <Ellipsis value='这是一段很长的文本内容，当文本超出容器宽度时，会自动显示省略号。适用于列表项、卡片标题等场景。' />
    </div>
  )
}

export default App
