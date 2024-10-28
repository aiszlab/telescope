'use client'

import { type Key, useEffect, useRef, useState } from 'react'
import { Menu } from 'musae'
import type { MenuItem } from 'musae/types/menu'
import { stringify } from '@aiszlab/relax/class-name'
import { usePathname } from 'next/navigation'
import { isHTMLElement } from '@aiszlab/relax'

interface Props {
  className?: string
}

const FloatNav = (props: Props) => {
  const [items, setItems] = useState<MenuItem[]>([])
  const navRef = useRef<HTMLElement>(null)
  const pathname = usePathname()

  const navigate = (key: Key) => {
    window.location.hash = key.toString()
  }

  useEffect(() => {
    setItems([])

    const contentNode = navRef.current?.nextSibling
    if (!contentNode) return

    const _menuItems =
      contentNode?.childNodes.values().reduce<MenuItem[]>((prev, child) => {
        if (!isHTMLElement(child)) return prev
        if (child.tagName !== 'H2') return prev

        // h2 标签代表需要分组
        prev.push({
          key: child.id,
          label: child.id,
          children: Array.from(
            child.nextElementSibling
              ?.querySelectorAll('[id]')
              .values()
              .map<MenuItem>((item) => {
                return {
                  key: item.id,
                  label: item.id
                }
              }) ?? []
          )
        })

        return prev
      }, []) ?? []

    setItems(_menuItems)
  }, [pathname])

  return (
    <nav className={stringify('h-fit sticky top-24 min-w-40', props.className)} ref={navRef}>
      <Menu items={items} size='small' onClick={navigate} />
    </nav>
  )
}

export default FloatNav
