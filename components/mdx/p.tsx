import type { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const P = ({ children }: Props) => {
  return <p className='text-sm'>{children}</p>
}

export default P
