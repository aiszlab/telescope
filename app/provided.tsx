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
        <_Layout.Header className='flex items-center gap-x-4'>
          <Link href='/'>
            <span className='text-3xl font-medium'>asiz.dev</span>
          </Link>

          <ul className='hidden lg:flex'>
            <li>
              <span className='ml-6 text-sm font-bold'>Docs</span>
            </li>
            <li>
              <span className='ml-6 text-sm font-bold'>About us</span>
            </li>
          </ul>

          <ul className='flex items-center justify-end flex-1'>
            <li>
              <Github />
            </li>
          </ul>
        </_Layout.Header>

        <_Layout.Main>{props.children}</_Layout.Main>
      </_Layout>
    </ThemeProvider>
  )
}

export default Provided
