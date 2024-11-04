import type { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const H3 = ({ children }: Props) => {
  return (
    <h3 id={children?.toString()} className='mt-7 mb-2.5 text-lg font-medium'>
      {children}
    </h3>
  )
}

export default H3
