'use client'

import { Form, Input, Button } from 'musae'

const Item = Form.Item

const Basic = () => {
  return (
    <Form>
      <Item label='用户名' required name='username'>
        <Input />
      </Item>

      <Item label='密码' required name='password'>
        <Input type='password' />
      </Item>

      <Item>
        <Button>登录</Button>
      </Item>
    </Form>
  )
}

export default Basic
