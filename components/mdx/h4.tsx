import type { ReactNode } from 'react'

interface Props {
  children?: ReactNode
  id?: string
}

const H4 = ({ children, id }: Props) => {
  return (
    <h4 id={id} className='mt-7 mb-2.5 text-base font-medium'>
      {children}
    </h4>
  )
}

export default H4
