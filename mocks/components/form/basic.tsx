'use client'
import { Form, Input, Button, FormRef } from 'musae'
import { useRef } from 'react'

const Item = Form.Item

const Basic = () => {
  const ref = useRef<FormRef>(null)

  const login = async () => {
    ref.current?.validate()
  }

  const reset = () => {
    ref.current?.reset()
  }

  return (
    <Form ref={ref}>
      <Item label='用户名' required name='username'>
        <Input />
      </Item>

      <Item label='密码' required name='password'>
        <Input type='password' />
      </Item>

      <Item>
        <Button onClick={login}>登录</Button>
        <Button onClick={reset}>重置</Button>
      </Item>
    </Form>
  )
}

export default Basic
