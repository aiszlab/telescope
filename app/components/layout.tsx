'use client'

import { useCallback, type ReactNode } from 'react'
import { Menu } from 'musae'
import { useComponentTree } from '@/hooks/components.hook'
import { useRouter } from 'next/navigation'

interface Props {
  children: ReactNode
}

const Layout = (props: Props) => {
  const menuItems = useComponentTree()
  const router = useRouter()

  const onMenuClick = useCallback(
    (key: string) => {
      router.push(key)
    },
    [router]
  )

  return (
    <main className='flex-1 grid grid-cols-5 mt-10'>
      <div className='px-3'>
        <Menu items={menuItems} onClick={onMenuClick} />
      </div>

      {props.children}
    </main>
  )
}

export default Layout
