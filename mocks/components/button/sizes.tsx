'use client'
import { Button, Grid } from 'musae'

const { Row, Col } = Grid

const Sizes = () => {
  return (
    <Row gutter={[8, 8]} justify='center' align='center'>
      <Col span={8}>
        <Button size='small'>小按钮</Button>
      </Col>

      <Col span={8}>
        <Button size='medium'>中按钮</Button>
      </Col>

      <Col span={8}>
        <Button size='large'>大按钮</Button>
      </Col>

      <Col span={8}>
        <Button size='small' variant='outlined'>
          小按钮
        </Button>
      </Col>

      <Col span={8}>
        <Button size='medium' variant='outlined'>
          中按钮
        </Button>
      </Col>

      <Col span={8}>
        <Button size='large' variant='outlined'>
          大按钮
        </Button>
      </Col>

      <Col span={8}>
        <Button size='small' variant='text'>
          小按钮
        </Button>
      </Col>

      <Col span={8}>
        <Button size='medium' variant='text'>
          中按钮
        </Button>
      </Col>

      <Col span={8}>
        <Button size='large' variant='text'>
          大按钮
        </Button>
      </Col>
    </Row>
  )
}

export default Sizes
