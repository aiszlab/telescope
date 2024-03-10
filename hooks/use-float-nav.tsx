import { useEvent, useUpdateEffect } from '@aiszlab/relax'
import { MenuItem } from 'musae'
import { usePathname } from 'next/navigation'
import { createContext, useMemo, useRef, useState } from 'react'

type ContextValue = {
  register: (key: string, type?: 'parent' | 'child') => void
  items: MenuItem[]
}

export const Context = createContext<ContextValue | null>(null)

type NavItems = Map<string, Omit<MenuItem, 'key' | 'children'> & { children?: NavItems }>

const toMenuItems = (items: NavItems): MenuItem[] => {
  return Array.from(items.entries()).map(([key, { label, children }]) => {
    return {
      key,
      label,
      children: children && toMenuItems(children)
    }
  })
}

export const useFloatNav = () => {
  const [items, setItems] = useState<NavItems>(new Map())
  const pathname = usePathname()
  const registedParentKey = useRef<string>()

  const register = useEvent<ContextValue['register']>((key, type = 'parent') => {
    setItems((prev) => {
      const next = new Map(prev)
      const hash = `#${key}`

      if (type === 'parent') {
        registedParentKey.current = key
        return next.set(key, {
          label: <a href={hash}>{key}</a>
        })
      }

      if (!registedParentKey.current) return next
      const parent = next.get(registedParentKey.current)
      parent && (parent.children = new Map(parent?.children).set(key, { label: <a href={hash}>{key}</a> }))
      return next
    })
  })

  useUpdateEffect(() => {
    setItems(new Map())
  }, [pathname])

  const contextValue = useMemo<ContextValue>(() => {
    return {
      register,
      items: toMenuItems(items)
    }
  }, [register, items])

  return { contextValue }
}
