'use client'
import { SessionStorage } from 'musae'

const App = () => {
  return (
    <div>
      <p>SessionStorage 组件用于在 sessionStorage 中存储数据。</p>
      <SessionStorage key='demo-key' value='demo-value' />
      <p>已设置 sessionStorage: demo-key = demo-value</p>
    </div>
  )
}

export default App
