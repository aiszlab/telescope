'use client'
import { Tour, Button, Divider, Space } from 'musae'
import { useRef, useState } from 'react'
import type { TourStep } from 'musae/types/tour'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  const first = useRef<HTMLButtonElement>(null)
  const second = useRef<HTMLButtonElement>(null)
  const last = useRef<HTMLButtonElement>(null)

  const open = () => {
    setIsOpen(true)
  }
  const close = () => {
    setIsOpen(false)
  }

  const steps: TourStep[] = [
    {
      title: '第一步',
      description: '上传附件',
      target: () => first.current
    },
    {
      title: '第二步',
      description: '保存内容',
      target: () => second.current
    }
  ]

  return (
    <div>
      <Button onClick={open}>开始</Button>
      <Divider />
      <Space>
        <Button ref={first}>第一步</Button>
        <Button ref={second}>第二步</Button>
        <Button ref={last}>...</Button>
      </Space>
      <Tour open={isOpen} steps={steps} onClose={close} overlay={false} />
    </div>
  )
}

export default App
