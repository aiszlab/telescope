'use client'

import { Button, Grid } from 'musae'

const { Row, Col } = Grid

const Basic = () => {
  return (
    <Row gutter={8} justify='center' align='center'>
      <Col span={8}>
        <Button>主要按钮</Button>
      </Col>

      <Col span={8}>
        <Button variant='outlined'>Outlined 按钮</Button>
      </Col>

      <Col span={8}>
        <Button variant='text'>文本按钮</Button>
      </Col>
    </Row>
  )
}

export default Basic
