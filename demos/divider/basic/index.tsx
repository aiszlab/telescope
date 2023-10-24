'use client'

import { Divider } from 'musae'

const Basic = () => {
  return (
    <div className='w-full'>
      <Divider>居中对齐</Divider>
      <Divider align='left'>左对齐</Divider>
      <Divider align='right'>右对齐</Divider>
    </div>
  )
}

export default Basic
