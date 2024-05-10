'use client'
import { Switch, Space } from 'musae'

const WithChild = () => {
  return (
    <Space>
      <Switch checkedChildren='开启' uncheckedChildren='关闭' />
      <Switch icon checkedChildren='开启' uncheckedChildren='关闭' />
    </Space>
  )
}

export default WithChild
