import { Context } from '@/hooks/use-float-nav'
import { useContext } from 'react'
import { Menu } from 'musae'

const FloatNav = () => {
  const items = useContext(Context)?.items ?? []
  if (items.length === 0) return

  return (
    <nav className='h-fit sticky top-24'>
      <Menu variant='text' items={items} defaultExpandedKeys={items.map((item) => item.key)} size='small' />
    </nav>
  )
}

export default FloatNav
