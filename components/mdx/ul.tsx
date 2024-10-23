import { clsx } from '@aiszlab/relax'
import type { ReactNode } from 'react'
import type { HTMLAttributes } from 'react'

const Ul = ({ className, ...props }: HTMLAttributes<HTMLUListElement>) => {
  return <ul {...props} className={clsx(className, 'list-disc pl-4')} />
}

export default Ul
