import { type ReactNode } from 'react'
import FloatNav from '@/components/float-nav'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='px-8 pb-8 flex flex-row-reverse gap-5'>
      <FloatNav className='max-lg:hidden' />
      <div className='flex-1 overflow-auto'>{children}</div>
    </div>
  )
}

export default Layout
