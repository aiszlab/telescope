import { Grid } from 'musae'

const { Row, Col } = Grid

const Basic = () => {
  return (
    <Row className='w-full'>
      <Col className='bg-blue-400 h-12 text-white flex justify-center items-center' span={24}>
        col-24
      </Col>

      <Col className='bg-blue-400 h-12 text-white flex justify-center items-center' span={12}>
        col-12
      </Col>
      <Col className='bg-blue-600 h-12 text-white flex justify-center items-center' span={12}>
        col-12
      </Col>

      <Col className='bg-blue-400 h-12 text-white flex justify-center items-center'>col-8</Col>
      <Col className='bg-blue-600 h-12 text-white flex justify-center items-center'>col-8</Col>
      <Col className='bg-blue-400 h-12 text-white flex justify-center items-center'>col-8</Col>

      <Col className='bg-blue-400 h-12 text-white flex justify-center items-center' span={6}>
        col-6
      </Col>
      <Col className='bg-blue-600 h-12 text-white flex justify-center items-center' span={6}>
        col-6
      </Col>
      <Col className='bg-blue-400 h-12 text-white flex justify-center items-center' span={6}>
        col-6
      </Col>
      <Col className='bg-blue-600 h-12 text-white flex justify-center items-center' span={6}>
        col-6
      </Col>
    </Row>
  )
}

export default Basic
