'use client'

import { useCallback, type Key, useMemo } from 'react'
import { Menu, Layout as _Layout, Button } from 'musae'
import { useRouter, usePathname } from 'next/navigation'
import { Context, useFloatNav } from '@/hooks/use-float-nav'
import FloatNav from '@/components/float-nav'
import { NavigationType, useNavigationItems } from './hooks'
import styles from './styles.module.css'
import clsx from 'clsx'

interface Props {
  children: string
  type: NavigationType
}

const Navigated = ({ type, children }: Props) => {
  const items = useNavigationItems({ type })
  const router = useRouter()
  const pathname = usePathname()

  const onMenuClick = useCallback(
    (key: Key) => {
      router.push(key.toString())
    },
    [router]
  )

  const defaultExpandedKeys = useMemo(() => {
    return items.map((item) => item.key)
  }, [items])

  const { contextValue } = useFloatNav()

  return (
    <Context.Provider value={contextValue}>
      <_Layout>
        <_Layout.Sider className='px-3 sticky top-0 overflow-hidden hover:overflow-y-auto'>
          <Menu
            items={items}
            onClick={onMenuClick}
            defaultExpandedKeys={defaultExpandedKeys}
            defaultSelectedKeys={[pathname]}
          />
        </_Layout.Sider>

        <_Layout.Main className={clsx(styles.main, 'p-8 pt-0 grid gap-x-5')}>
          <div>{children}</div>
          <FloatNav />
        </_Layout.Main>
      </_Layout>
    </Context.Provider>
  )
}

export default Navigated
