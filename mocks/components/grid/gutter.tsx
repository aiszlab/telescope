'use client'
import { Grid, useTheme } from 'musae'

const { Row, Col } = Grid

const Gutter = () => {
  const theme = useTheme()

  const styled = {
    x: {
      backgroundColor: theme.colors['primary'],
      color: theme.colors['on-primary']
    },
    y: {
      backgroundColor: theme.colors['primary-container'],
      color: theme.colors['on-primary-container']
    }
  }

  return (
    <Row className='w-full' gutter={[8, 12]}>
      <Col className='h-12 flex justify-center items-center' span={24} style={styled.x}>
        col-24
      </Col>

      <Col className='h-12 flex justify-center items-center' span={12} style={styled.x}>
        col-12
      </Col>
      <Col className='h-12 flex justify-center items-center' span={12} style={styled.y}>
        col-12
      </Col>
    </Row>
  )
}

export default Gutter
