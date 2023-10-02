import type { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const H1 = ({ children }: Props) => {
  return <h1 className='mt-8 mb-4 text-3xl font-semibold'>{children}</h1>
}

export default H1
