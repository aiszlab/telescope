'use client'
import { Button, Grid } from 'musae'
import { KeyboardArrowLeft, KeyboardArrowRight } from 'musae/icons'

const { Row, Col } = Grid

const Icon = () => {
  return (
    <Row gutter={12}>
      <Col span={8}>
        <Button prefix={<KeyboardArrowLeft />}>返回</Button>
      </Col>

      <Col span={8}>
        <Button suffix={<KeyboardArrowRight />}>前往</Button>
      </Col>

      <Col span={8}>
        <Button prefix={<KeyboardArrowLeft />} suffix={<KeyboardArrowRight />}>
          前后
        </Button>
      </Col>
    </Row>
  )
}

export default Icon
