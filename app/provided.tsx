'use client'

import { Layout as _Layout, ThemeProvider, Github } from 'musae'
import Link from 'next/link'
import { type ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const Provided = (props: Props) => {
  return (
    <ThemeProvider>
      <_Layout>
        <_Layout.Header className='flex items-center'>
          <Link href='/'>
            <span className='text-3xl font-medium'>asiz.dev</span>
          </Link>

          <span className='ml-6 text-sm font-bold'>Docs</span>
          <span className='ml-6 text-sm font-bold'>About us</span>
          <Github />
        </_Layout.Header>

        <_Layout.Main>{props.children}</_Layout.Main>
      </_Layout>
    </ThemeProvider>
  )
}

export default Provided
