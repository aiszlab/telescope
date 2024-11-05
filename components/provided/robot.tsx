'use client'
import { Chat, Fab, Popover } from 'musae'
import { SmartToy } from 'musae/icons'

const Robot = () => {
  return (
    <Popover triggerBy='click' content={<Chat placeholder='你想问什么呀，都可以问我~' />}>
      <Fab draggable={false}>
        <SmartToy />
      </Fab>
    </Popover>
  )
}

export default Robot
