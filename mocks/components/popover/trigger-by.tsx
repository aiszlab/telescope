'use client'
import { Popover, Space, Button } from 'musae'

const App = () => {
  return (
    <Space>
      <Popover title='Hover' content='hover 显示' triggerBy='hover'>
        <Button>hover</Button>
      </Popover>

      <Popover title='Click' content='click 显示' triggerBy='click'>
        <Button>click</Button>
      </Popover>

      <Popover title='Focus' content='focus 显示' triggerBy='focus'>
        <Button>focus</Button>
      </Popover>

      <Popover title='ContextMenu' content='contextMenu 显示' triggerBy='contextMenu'>
        <Button>contextMenu</Button>
      </Popover>
    </Space>
  )
}

export default App
