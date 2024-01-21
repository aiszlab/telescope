'use client'

import { useCallback, type Key, useMemo } from 'react'
import { Menu, Layout as _Layout } from 'musae'
import { useComponentTree } from '@/hooks/components.hook'
import { useRouter } from 'next/navigation'

interface Props {
  children: string
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

  const defaultExpandedKeys = useMemo(() => {
    return menuItems.map((item) => item.key)
  }, [menuItems])

  return (
    <_Layout>
      <_Layout.Sider className='px-3 sticky top-0 overflow-hidden hover:overflow-y-auto'>
        <Menu items={menuItems} onClick={onMenuClick} defaultExpandedKeys={defaultExpandedKeys} />
      </_Layout.Sider>

      <_Layout.Main className='p-8 pt-0'>{props.children}</_Layout.Main>
    </_Layout>
  )
}

export default Layout
