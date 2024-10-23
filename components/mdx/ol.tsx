import { clsx } from '@aiszlab/relax'
import type { OlHTMLAttributes } from 'react'

const Ol = ({ className, ...props }: OlHTMLAttributes<HTMLOListElement>) => {
  return <ol {...props} className={clsx(className, 'list-decimal list-inside')} />
}

export default Ol
