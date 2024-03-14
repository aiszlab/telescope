import type { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const Ul = (props: Props) => {
  return <ul className='list-disc text-sm pl-4'>{props.children}</ul>
}

export default Ul
