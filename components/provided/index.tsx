'use client'

import { ThemeProvider, ConfigProvider, Bench } from 'musae'
import Link from 'next/link'
import { type Key, useMemo, type ReactNode, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Toolbar from './toolbar'
import { DocSearch } from '@docsearch/react'
import { NAVIGATIONS } from './navigation'
import { zh_CN } from 'musae/locales'
import type { Locale } from 'musae/types/locale'

import '@docsearch/css'

interface Props {
  children?: ReactNode
}

const Provided = (props: Props) => {
  const router = useRouter()
  const pathname = usePathname()
  const [locale, setLocale] = useState<Locale>(zh_CN)

  const toDocs = (href: string) => {
    router.push(href)
  }

  const defaultExpandedKeys = useMemo(() => {
    return NAVIGATIONS.reduce<string[]>(
      (prev, item) => prev.concat(item.children?.map((child) => child.path) ?? []),
      []
    )
  }, [])

  const changeLocale = (locale?: Locale) => {
    if (!locale) return
    setLocale(locale)
  }

  return (
    <ThemeProvider>
      <ConfigProvider locale={locale}>
        <Bench
          title={
            <Link href='/' className='text-inherit no-underline'>
              aisz.dev
            </Link>
          }
          navigations={NAVIGATIONS}
          trailing={
            <>
              <DocSearch appId='9BSY98YGAX' indexName='aisz' apiKey='9179f8ab82e675e97e552de847289030' />
              <Toolbar onLocaleChange={changeLocale} />
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
