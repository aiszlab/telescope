'use client'

import { ThemeProvider, ConfigProvider, Bench } from 'musae'
import Link from 'next/link'
import { type Key, useMemo, type ReactNode } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Toolbar from './toolbar'
import { DocSearch } from '@docsearch/react'
import { NAVIGATIONS } from './navigation'

import '@docsearch/css'

interface Props {
  children?: ReactNode
}

const Provided = (props: Props) => {
  const router = useRouter()
  const pathname = usePathname()

  const toDocs = (href: string) => {
    router.push(href)
  }

  const defaultExpandedKeys = useMemo(() => {
    return NAVIGATIONS.reduce<Key[]>((prev, item) => prev.concat(item.children?.map((child) => child.path) ?? []), [])
  }, [])

  return (
    <ThemeProvider>
      <ConfigProvider>
        <Bench
          title={<Link href='/'>aisz.dev</Link>}
          navigations={NAVIGATIONS}
          trailing={
            <>
              <DocSearch appId='9BSY98YGAX' indexName='aisz' apiKey='9179f8ab82e675e97e552de847289030' />
              <Toolbar />
            </>
          }
          onNavigate={toDocs}
          location={pathname}
          defaultExpandedKeys={defaultExpandedKeys}
        >
          {props.children}
        </Bench>
      </ConfigProvider>
    </ThemeProvider>
  )
}

export default Provided
