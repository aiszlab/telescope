import { Context } from '@/hooks/use-float-nav'
import { useContext } from 'react'
import { Menu } from 'musae'
import clsx from 'clsx'

interface Props {
  className: string
}

const FloatNav = (props: Props) => {
  const items = useContext(Context)?.items ?? []
  if (items.length === 0) return

  return (
    <nav className={clsx('h-fit sticky top-24', props.className)}>
      <Menu items={items} defaultExpandedKeys={items.map((item) => item.key)} size='small' />
    </nav>
  )
}

export default FloatNav
