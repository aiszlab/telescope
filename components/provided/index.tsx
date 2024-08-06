'use client'

import { Layout as _Layout, ThemeProvider, Menu, ConfigProvider } from 'musae'
import Link from 'next/link'
import { Key, type ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import Toolbar from './toolbar'
import { DocSearch } from '@docsearch/react'
import '@docsearch/css'

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
      <ConfigProvider>
        <_Layout className='min-h-screen'>
          <_Layout.Header className='flex items-center gap-x-4 shadow-sm'>
            <Link href='/'>
              <span className='text-3xl font-medium'>aisz.dev</span>
            </Link>

            <DocSearch appId='9BSY98YGAX' indexName='aisz' apiKey='a551ed2db3f040c9b309d3c53afab838' />

            <Menu
              mode='horizontal'
              className='flex-1 justify-end'
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
      </ConfigProvider>
    </ThemeProvider>
  )
}

export default Provided
