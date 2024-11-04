import type { AnchorHTMLAttributes, DetailedHTMLProps } from 'react'
import { stringify } from '@aiszlab/relax/class-name'

type Props = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>

const Anchor = ({ children, className, href, ...props }: Props) => {
  // hash当前页
  const target = href?.charAt(0) === '#' ? '_self' : '_blank'

  return (
    <a
      className={stringify(className, 'text-blue-400 cursor-pointer mx-1 text-sm')}
      {...props}
      href={href}
      target={target}
    >
      {children}
    </a>
  )
}

export default Anchor
