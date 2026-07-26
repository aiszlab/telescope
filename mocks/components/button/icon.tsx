'use client'
import { Button, Grid } from 'musae'
import { IconKeyboardArrowLeft, IconKeyboardArrowRight } from 'musae/icons'

const { Row, Col } = Grid

const Icon = () => {
  return (
    <Row gutter={12}>
      <Col span={8}>
        <Button prefix={<IconKeyboardArrowLeft />}>返回</Button>
      </Col>

      <Col span={8}>
        <Button suffix={<IconKeyboardArrowRight />}>前往</Button>
      </Col>

      <Col span={8}>
        <Button prefix={<IconKeyboardArrowLeft />} suffix={<IconKeyboardArrowRight />}>
          前后
        </Button>
      </Col>
    </Row>
  )
}

export default Icon
