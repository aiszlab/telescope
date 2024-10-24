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
      <Button onClick={open}>开始引导</Button>
      <Divider margin={12} />
      <Space>
        <Button ref={first}>查看Demo</Button>
        <Button ref={second}>阅读文档</Button>
        <Button ref={last}>...</Button>
      </Space>
      <Tour open={isOpen} steps={steps} onClose={close} />
    </div>
  )
}

export default App
