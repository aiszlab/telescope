'use client'

import { Calendar } from 'musae'
import dayjs from 'dayjs'

const Basic = () => {
  return <Calendar value={[dayjs().subtract(2, 'day'), dayjs().add(4, 'day')]} />
}

export default Basic
