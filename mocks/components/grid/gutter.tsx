'use client'

import { Grid } from 'musae'

const { Row, Col } = Grid

const Gutter = () => {
  return (
    <Row className='w-full' gutter={[4, 12]}>
      <Col className='bg-blue-400 h-12 text-white flex justify-center items-center' span={24}>
        col-24
      </Col>

      <Col className='bg-blue-400 h-12 text-white flex justify-center items-center' span={12}>
        col-12
      </Col>
      <Col className='bg-blue-600 h-12 text-white flex justify-center items-center' span={12}>
        col-12
      </Col>
    </Row>
  )
}

export default Gutter
