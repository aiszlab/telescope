import clsx from 'clsx'
import type { AnchorHTMLAttributes, DetailedHTMLProps } from 'react'

type Props = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>

const Anchor = ({ children, className, ...props }: Props) => {
  return (
    <a className={clsx(className, 'text-blue-400')} {...props}>
      {children}
    </a>
  )
}

export default Anchor
