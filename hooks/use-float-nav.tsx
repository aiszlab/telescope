import { useEvent } from '@aiszlab/relax'
import { ReactNode, createContext, useContext, useMemo, useState } from 'react'

type Item = {
  id: string
  title: string
}

type ContextValue = {
  register: (item: Item) => void
  items: Item[]
}

const Context = createContext<ContextValue | null>(null)

interface Props {
  children: ReactNode
}

export const useFloatNav = ({ children }: Props) => {
  const [items, setItems] = useState<Map<string, string>>(new Map())

  const register = useEvent((item: Item) => {
    setItems((prev) => new Map(prev).set(item.id, item.title))
  })

  const Provider = useMemo(() => {
    return (
      <Context.Provider
        value={{
          register,
          items: Array.from(items.entries()).map(([id, title]) => ({
            id,
            title
          }))
        }}
      >
        {children}
      </Context.Provider>
    )
  }, [register, items, children])

  const useNav = () => useContext(Context)

  return [Provider, useNav]
}
