'use client'
import * as action from 'musae/icons/action'
import * as alert from 'musae/icons/alert'
import * as content from 'musae/icons/content'
import * as hardware from 'musae/icons/hardware'
import * as image from 'musae/icons/image'
import * as navigation from 'musae/icons/navigation'
import * as mock from 'musae/icons/mock'

import { Grid } from 'musae'

const ICON_GROUPS = [action, alert, content, hardware, image, navigation, mock]
const { Row, Col } = Grid

const Icons = () => {
  return (
    <div className='flex flex-col gap-5'>
      {ICON_GROUPS.map((group, y) => {
        return (
          <Row key={y} align='center' justify='center' gutter={20}>
            {Object.entries(group).map(([key, Icon]) => {
              return (
                <Col key={key} span={3} className='flex flex-col items-center'>
                  <Icon size={48} />
                  <div className='text-ellipsis overflow-hidden max-w-24'>{key}</div>
                </Col>
              )
            })}
          </Row>
        )
      })}
    </div>
  )
}

export default Icons
