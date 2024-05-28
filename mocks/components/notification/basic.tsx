'use client'
import { Button, useNotification, Grid } from 'musae'

const { Col, Row } = Grid
type Placement = Exclude<Parameters<ReturnType<typeof useNotification>[0]['info']>[0]['placement'], undefined>

const PLACEMENTS: Placement[] = ['topLeft', 'top', 'topRight', 'bottomLeft', 'bottom', 'bottomRight']

const App = () => {
  const [notifier, holder] = useNotification()

  const click = (placement: Placement) => {
    notifier.info({
      title: '错误标题',
      description: '展示一个普通的错误消息！',
      placement
    })
  }

  return (
    <Row gutter={8}>
      {holder}
      {PLACEMENTS.map((placement) => {
        return (
          <Col span={8} key={placement}>
            <Button onClick={() => click(placement)}>{placement}</Button>
          </Col>
        )
      })}
    </Row>
  )
}

export default App
