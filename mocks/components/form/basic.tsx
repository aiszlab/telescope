"use client";
import { Form, Input, Button } from "musae";

const Item = Form.Item;

const App = () => {
  const form = Form.useForm();

  return (
    <Form form={form}>
      <Item label="用户名" required name="username">
        <Input />
      </Item>

      <Item label="密码" required name="password">
        <Input type="password" />
      </Item>

      <Item>
        <Button type="submit">登录</Button>
      </Item>
    </Form>
  );
};

export default App;
