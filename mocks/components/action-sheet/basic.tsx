'use client'
import { ActionSheet, useActionSheet, Button } from 'musae'
import { useState } from 'react'

const ACTIONS = [
  { key: 'edit', text: '编辑', onClick: () => console.log('编辑') },
  { key: 'share', text: '分享', description: '分享给好友', onClick: () => console.log('分享') },
  { key: 'delete', text: '删除', onClick: () => console.log('删除') },
]

const App = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <Button onClick={() => setShow(true)}>打开操作面板</Button>
      <ActionSheet
        open={show}
        onClose={() => setShow(false)}
        actions={ACTIONS}
        title='操作'
        description='请选择要执行的操作'
      />
    </>
  )
}

export default App
