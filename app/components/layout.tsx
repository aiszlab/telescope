import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Layout = (props: Props) => {
  return (
    <main className='flex-1 grid grid-cols-5 mt-10'>
      <div className=''>
        {/* TODO replace musae menu */}
        <ul>
          <li className='m-1 pl-10 pr-4'>组件总览</li>
        </ul>
      </div>
      <article className='col-start-2 col-end-6 px-16 pb-8'>{props.children}</article>
    </main>
  )
}

export default Layout
