'use client'

import React from 'react'
import { Breadcrumb } from 'musae'

const Basic = () => (
  <Breadcrumb
    items={[
      {
        label: 'Home'
      },
      {
        label: <a href=''>Application Center</a>
      },
      {
        label: 'Application List'
      }
    ]}
  />
)

export default Basic
