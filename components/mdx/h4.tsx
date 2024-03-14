import type { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const H4 = ({ children }: Props) => {
  return <h4 className='mt-7 mb-2.5 text-base font-medium'>{children}</h4>
}

export default H4
