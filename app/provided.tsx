'use client'

import { Layout as _Layout, ThemeProvider, Github, Menu } from 'musae'
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

          <Menu
            mode='horizontal'
            className='hidden lg:flex'
            items={[
              {
                key: '/docs',
                label: <span className='text-sm font-bold'>Docs</span>,
                children: [
                  {
                    key: '/docs/components',
                    label: <Link href='/components'>组件</Link>
                  },
                  {
                    key: '/docs/hooks',
                    label: <Link href='/hooks'>Hooks</Link>
                  }
                ]
              },
              { key: '/about-us', label: <span className='text-sm font-bold'>About us</span>, children: [] }
            ]}
          />

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
