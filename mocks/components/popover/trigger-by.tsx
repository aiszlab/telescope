'use client'
import { Popover, Space } from 'musae'

const App = () => {
  return (
    <Space>
      <Popover title='Hover' description='hover 显示' triggerBy='hover'>
        <span>hover</span>
      </Popover>

      <Popover title='Click' description='click 显示' triggerBy='click'>
        <span>click</span>
      </Popover>

      <Popover title='Focus' description='focus 显示' triggerBy='focus'>
        <span>focus</span>
      </Popover>

      <Popover title='ContextMenu' description='contextMenu 显示' triggerBy='contextMenu'>
        <span>contextMenu</span>
      </Popover>
    </Space>
  )
}

export default App
