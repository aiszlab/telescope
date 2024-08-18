'use client'
import { Radio, Space } from 'musae'

const App = () => {
  return (
    <Space gutter={8} orientation='vertical'>
      <span>禁用单个</span>
      <Radio value='demo' disabled checked>
        Demo
      </Radio>

      <span>禁用Group</span>
      <Radio.Group disabled value='A'>
        <Radio value='A'>A</Radio>
        <Radio value='B'>B</Radio>
        <Radio value='C'>C</Radio>
      </Radio.Group>
    </Space>
  )
}

export default App
