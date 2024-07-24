'use client'
import { Popover, Space, Button } from 'musae'

const App = () => {
  return (
    <Space>
      <Popover title='Hover' description='hover 显示' triggerBy='hover'>
        <Button>hover</Button>
      </Popover>

      <Popover title='Click' description='click 显示' triggerBy='click'>
        <Button>click</Button>
      </Popover>

      <Popover title='Focus' description='focus 显示' triggerBy='focus'>
        <Button>focus</Button>
      </Popover>

      <Popover title='ContextMenu' description='contextMenu 显示' triggerBy='contextMenu'>
        <Button>contextMenu</Button>
      </Popover>
    </Space>
  )
}

export default App
