import { stringify } from '@aiszlab/relax/class-name'
import type { HTMLAttributes } from 'react'

const Ul = ({ className, ...props }: HTMLAttributes<HTMLUListElement>) => {
  return <ul {...props} className={stringify(className, 'list-disc pl-4')} />
}

export default Ul
