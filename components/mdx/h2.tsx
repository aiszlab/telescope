'use client'

import { Context } from '@/hooks/use-float-nav'
import { useContext, type ReactNode } from 'react'
import { useMount } from '@aiszlab/relax'

interface Props {
  children?: ReactNode
}

const H2 = ({ children }: Props) => {
  const register = useContext(Context)?.register

  useMount(() => {
    if (!register) return
    if (!children) return
    register(children.toString())
  })

  return (
    <h2 id={children?.toString()} className='mt-8 mb-4 text-2xl font-semibold'>
      {children}
    </h2>
  )
}

export default H2
