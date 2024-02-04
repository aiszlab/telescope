import { type ReactNode } from 'react'
import clsx from 'clsx'

interface Props {
  children?: ReactNode
  className?: string
}

const Code = (props: Props) => {
  return <code className={clsx(props.className, 'rounded p-1.5 bg-black bg-opacity-5')}>{props.children}</code>
}

export default Code
