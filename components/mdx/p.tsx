import type { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const P = ({ children }: Props) => {
  return <p className='my-4'>{children}</p>
}

export default P
