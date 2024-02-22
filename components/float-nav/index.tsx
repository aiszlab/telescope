import { Context } from '@/hooks/use-float-nav'
import { useContext } from 'react'
import { Menu } from 'musae'

const FloatNav = () => {
  const items = useContext(Context)?.items ?? []
  if (items.length === 0) return

  return (
    <nav>
      <Menu
        className='top-24'
        variant='text'
        items={items}
        style={{
          position: 'sticky'
        }}
        defaultExpandedKeys={items.map((item) => item.key)}
        size='small'
      />
    </nav>
  )
}

export default FloatNav
