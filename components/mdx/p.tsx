import type { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const P = ({ children }: Props) => {
  return <p>{children}</p>
}

export default P
