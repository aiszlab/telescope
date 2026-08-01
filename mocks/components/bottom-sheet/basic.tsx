'use client'
import { BottomSheet, Button } from 'musae'
import { useState } from 'react'

const App = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>打开底部面板</Button>
      <BottomSheet open={open} onClose={() => setOpen(false)} height='40vh'>
        <div style={{ padding: 16 }}>
          <h3>底部面板标题</h3>
          <p>这是底部面板的内容区域，支持任意内容。</p>
        </div>
      </BottomSheet>
    </>
  )
}

export default App
