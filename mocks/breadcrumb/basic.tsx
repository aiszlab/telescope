import React from 'react'
import { Breadcrumb } from 'musae'

const Basic = () => (
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
  />
)

export default Basic
