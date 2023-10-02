'use client'

import { type ReactNode } from 'react'
import { Button } from 'musae'

interface Props {
  children?: ReactNode
}

const Pre = (props: Props) => {
  return (
    <pre className='relative'>
      <Button variant='text' className='absolute top-3 right-3 p-0'>
        复制
      </Button>
      {props.children}
    </pre>
  )
}

export default Pre
