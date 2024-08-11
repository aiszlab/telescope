'use client'

import { Layout as _Layout, ThemeProvider, ConfigProvider, Bench } from 'musae'
import Link from 'next/link'
import { Key, type ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import Toolbar from './toolbar'
import { DocSearch } from '@docsearch/react'
import { NAVIGATIONS } from './navigation'

import '@docsearch/css'

interface Props {
  children?: ReactNode
}

const Provided = (props: Props) => {
  const router = useRouter()

  const toDocs = (href: string) => {
    router.push(href)
  }

  return (
    <ThemeProvider>
      <ConfigProvider>
        <Bench
          title={<Link href='/'>aisz.dev</Link>}
          className='min-h-screen'
          navigations={NAVIGATIONS}
          trailing={
            <>
              <DocSearch appId='9BSY98YGAX' indexName='aisz' apiKey='9179f8ab82e675e97e552de847289030' />
              <Toolbar />
            </>
          }
          onNavigate={toDocs}
        >
          {props.children}
        </Bench>
      </ConfigProvider>
    </ThemeProvider>
  )
}

export default Provided
