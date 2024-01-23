import React from 'react'
import { Breadcrumb } from 'musae'

const Separator = () => (
  <Breadcrumb
    items={[
      {
        label: 'Home'
      },
      {
        label: <a href='/components'>Components</a>
      },
      {
        label: 'Breadcrumb'
      }
    ]}
    separator='>'
  />
)

export default Separator
