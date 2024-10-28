import type { AnchorHTMLAttributes, DetailedHTMLProps } from 'react'
import { stringify } from '@aiszlab/relax/class-name'

type Props = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>

const Anchor = ({ children, className, ...props }: Props) => {
  return (
    <a className={stringify(className, 'text-blue-400 cursor-pointer mx-1 text-sm')} {...props} target='_blank'>
      {children}
    </a>
  )
}

export default Anchor
