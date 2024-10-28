import { stringify } from '@aiszlab/relax/class-name'
import type { OlHTMLAttributes } from 'react'

const Ol = ({ className, ...props }: OlHTMLAttributes<HTMLOListElement>) => {
  return <ol {...props} className={stringify(className, 'list-decimal list-inside')} />
}

export default Ol
