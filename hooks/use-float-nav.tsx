import { useEvent, useUpdateEffect } from '@aiszlab/relax'
import { MenuItem } from 'musae'
import { usePathname } from 'next/navigation'
import { createContext, useMemo, useState } from 'react'

type ContextValue = {
  register: (key: string, parentKey?: string) => void
  items: MenuItem[]
}

export const Context = createContext<ContextValue | null>(null)

export const useFloatNav = () => {
  const [items, setItems] = useState<Map<string, Omit<MenuItem, 'key'>>>(new Map())
  const pathname = usePathname()

  const register = useEvent<ContextValue['register']>((key, parentKey) => {
    setItems((prev) => {
      const next = new Map(prev)

      if (!parentKey) {
        return next.set(key, {
          label: <a href={`#${key}`}>{key}</a>
        })
      }

      const parent = next.has(parentKey)
        ? next.get(parentKey)
        : next
            .set(parentKey, {
              label: <a href={`#${key}`}>{key}</a>
            })
            .get(parentKey)
      parent!.children = Array.from(
        new Map(parent?.children?.map((child) => [child.key, child]))
          .set(key, {
            key,
            label: <a href={`#${key}`}>{key}</a>
          })
          .values()
      )
      return next
    })
  })

  useUpdateEffect(() => {
    setItems(new Map())
  }, [pathname])

  const contextValue = useMemo<ContextValue>(() => {
    return {
      register,
      items: Array.from(items.entries()).map(([key, item]) => ({
        ...item,
        key
      }))
    }
  }, [register, items])

  return { contextValue }
}
