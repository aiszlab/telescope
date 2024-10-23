import type { AnchorHTMLAttributes, DetailedHTMLProps } from 'react'
import { clsx } from '@aiszlab/relax'

type Props = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>

const Anchor = ({ children, className, ...props }: Props) => {
  return (
    <a className={clsx(className, 'text-blue-400 cursor-pointer mx-1')} {...props} target='_blank'>
      {children}
    </a>
  )
}

export default Anchor
