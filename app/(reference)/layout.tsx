import { type ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
  return <div className='px-8 pb-8'>{children}</div>
}

export default Layout
