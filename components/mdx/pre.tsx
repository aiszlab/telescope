import { type ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const Pre = (props: Props) => {
  return <pre className='relative text-sm'>{props.children}</pre>
}

export default Pre
