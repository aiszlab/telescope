'use client'

import { useCallback, type ReactNode, type Key } from 'react'
import { Menu } from 'musae'
import { useComponentTree } from '@/hooks/components.hook'
import { useRouter } from 'next/navigation'
import CacheProvider from '@/components/cache-provider'

interface Props {
  children: ReactNode
}

const Layout = (props: Props) => {
  const menuItems = useComponentTree()
  const router = useRouter()

  const onMenuClick = useCallback(
    (key: Key) => {
      router.push(key.toString())
    },
    [router]
  )

  return (
    <CacheProvider>
      <main className='flex-1 grid grid-cols-5 mt-10'>
        <div className='px-3'>
          <Menu items={menuItems} onClick={onMenuClick} />
        </div>

        <div className='col-start-2 col-end-6 px-16 pb-8'>{props.children}</div>
      </main>
    </CacheProvider>
  )
}

export default Layout
