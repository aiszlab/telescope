'use client'

import { Calendar } from 'musae'
import { useState } from 'react'
import dayjs, { type Dayjs } from 'dayjs'

const App = () => {
  const [at, setAt] = useState(dayjs())
  const onClick = (clickAt: Dayjs) => {
    setAt(clickAt)
  }

  return <Calendar value={at} onClick={onClick} />
}

export default App
