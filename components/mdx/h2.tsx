import { stringify } from '@aiszlab/relax/class-name'
import { type ReactNode } from 'react'

interface Props {
  children?: ReactNode
  className?: string
}

const H2 = ({ children, className }: Props) => {
  return (
    <h2 id={children?.toString()} className={stringify(className, 'mt-8 mb-4 text-2xl font-semibold')}>
      {children}
    </h2>
  )
}

export default H2
