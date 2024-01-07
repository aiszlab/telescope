'use client'

import { Layout as _Layout } from 'musae'
import Link from 'next/link'
import type { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const Layout = (props: Props) => {
  return (
    <_Layout>
      <_Layout.Header>
        <Link href='/'>
          <span className='text-3xl'>asiz.dev</span>
        </Link>
      </_Layout.Header>

      <_Layout.Main>{props.children}</_Layout.Main>
    </_Layout>
  )
}

export default Layout
