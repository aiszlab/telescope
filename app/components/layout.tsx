'use client'

import { useCallback, type Key, useMemo } from 'react'
import { Menu, Layout as _Layout } from 'musae'
import { useComponents } from '@/hooks/use-components'
import { useRouter, usePathname } from 'next/navigation'
import { useFloatNav } from '@/hooks/use-float-nav'

interface Props {
  children: string
}

const Layout = (props: Props) => {
  const menuItems = useComponents()
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

  const [] = useFloatNav()

  return (
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
          gridTemplateColumns: '1fr 240px',
          columnGap: 20
        }}
      >
        <div className='max-w-5xl w-full justify-self-center'>{props.children}</div>
        <nav>1</nav>
      </_Layout.Main>
    </_Layout>
  )
}

export default Layout
