'use client'

import React from 'react'
import { Breadcrumb } from 'musae'

const App = () => (
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

export default App
