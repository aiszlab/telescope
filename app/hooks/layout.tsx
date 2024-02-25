'use client'

import { useCallback, type Key, useMemo } from 'react'
import { Menu, Layout as _Layout } from 'musae'
import { useHooks } from '@/hooks/use-hooks'
import { useRouter, usePathname } from 'next/navigation'
import { Context, useFloatNav } from '@/hooks/use-float-nav'
import FloatNav from '@/components/float-nav'

interface Props {
  children: string
}

const Layout = (props: Props) => {
  const menuItems = useHooks()
  const router = useRouter()
  const pathname = usePathname()

  const onMenuClick = useCallback(
    (key: Key) => {
      router.push(key.toString())
    },
    [router]
  )

  const defaultExpandedKeys = useMemo(() => {
    return menuItems.map((item) => item.key)
  }, [menuItems])

  const { contextValue } = useFloatNav()

  return (
    <Context.Provider value={contextValue}>
      <_Layout>
        <_Layout.Sider className='px-3 sticky top-0 overflow-hidden hover:overflow-y-auto'>
          <Menu
            items={menuItems}
            onClick={onMenuClick}
            defaultExpandedKeys={defaultExpandedKeys}
            defaultSelectedKeys={[pathname]}
          />
        </_Layout.Sider>

        <_Layout.Main
          className='p-8 pt-0 grid'
          style={{
            gridTemplateColumns: 'calc(100% - 200px) 180px',
            columnGap: 20
          }}
        >
          <div>{props.children}</div>
          <FloatNav />
        </_Layout.Main>
      </_Layout>
    </Context.Provider>
  )
}

export default Layout
