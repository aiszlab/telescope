import type { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const H2 = ({ children }: Props) => {
  return <h2 className='mt-8 mb-4 text-2xl font-semibold'>{children}</h2>
}

export default H2
