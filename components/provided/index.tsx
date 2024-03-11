'use client'

import { Layout as _Layout, ThemeProvider, Menu } from 'musae'
import Link from 'next/link'
import { Key, type ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import Toolbar from './toolbar'

interface Props {
  children?: ReactNode
}

const Provided = (props: Props) => {
  const router = useRouter()

  const toDocs = (href: Key) => {
    router.push(href.toString())
  }

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
                    key: '/components',
                    label: '组件'
                  },
                  {
                    key: '/hooks',
                    label: 'Hooks'
                  }
                ]
              },
              { key: '/about-us', label: <span className='text-sm font-bold'>About us</span> }
            ]}
            onClick={toDocs}
          />

          <Toolbar />
        </_Layout.Header>

        <_Layout.Main className='flex-1 flex flex-col'>{props.children}</_Layout.Main>
      </_Layout>
    </ThemeProvider>
  )
}

export default Provided
