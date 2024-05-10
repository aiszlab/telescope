'use client'
import { Switch, Space } from 'musae'

const Disabled = () => {
  return (
    <Space>
      <Switch disabled value={false} />
      <Switch uncheckedChildren='OFF' icon disabled value={false} />
      <Switch disabled value />
      <Switch checkedChildren='ON' icon disabled value />
    </Space>
  )
}

export default Disabled
