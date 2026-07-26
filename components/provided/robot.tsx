'use client'
import { Chat, Fab, Popover } from 'musae'
import { IconSmartToy } from 'musae/icons'

const Robot = () => {
  return (
    <Popover triggerBy='click' content={<Chat placeholder='你想问什么呀，都可以问我~' />}>
      <Fab draggable={false}>
        <IconSmartToy />
      </Fab>
    </Popover>
  )
}

export default Robot
