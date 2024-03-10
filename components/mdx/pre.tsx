import { type ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const Pre = (props: Props) => {
  return <pre className='relative text-sm rounded my-3 p-4 bg-black bg-opacity-5'>{props.children}</pre>
}

export default Pre
