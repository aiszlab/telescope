'use client'

import { Form, Input, Select } from 'musae'

const { Item } = Form

const Basic = () => {
  return (
    <Form onChange={(values) => console.log('values====', values)}>
      <Item name='name' required label='测试'>
        <Input />
      </Item>

      {/* <Item name='sex' required>
        <Select
          options={[
            {
              value: '1',
              label: '2'
            }
          ]}
        />
      </Item> */}
    </Form>
  )
}

export default Basic
