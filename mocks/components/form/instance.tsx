'use client'
import { Form, Input, Space, Button, useMessage } from 'musae'

const { Item, useForm } = Form

interface FormValues {
  username: string
  password: string
}

const Instance = () => {
  const form = useForm<FormValues>()
  const [{ info }, holder] = useMessage()

  const reset = () => {
    form.reset()
  }

  const login = async () => {
    const isValid = await form.trigger().catch(() => false)
    if (!isValid) return

    const values = form.getValues()
    info({ description: `用户名: ${values.username}; 密码: ${values.password}` })
  }

  const fill = () => {
    form.setValue('username', 'murukal', { shouldValidate: true })
    form.setValue('password', 'murukal-password', { shouldValidate: true })
  }

  return (
    <>
      <Form form={form}>
        <Item label='用户名' required name='username'>
          <Input />
        </Item>

        <Item label='密码' required name='password'>
          <Input type='password' />
        </Item>

        <Item>
          <Space>
            <Button onClick={login}>登录</Button>
            <Button onClick={reset}>重置</Button>
            <Button onClick={fill} variant='text'>
              填充表单
            </Button>
          </Space>
        </Item>
      </Form>
      {holder}
    </>
  )
}

export default Instance
