import { type ReactNode } from 'react'
import clsx from 'clsx'

interface Props {
  children?: ReactNode
  className?: string
}

const Code = (props: Props) => {
  return (
    <code
      className={clsx(props.className, 'rounded p-2')}
      style={{
        background: 'rgba(0, 0, 0, 0.05)'
      }}
    >
      {props.children}
    </code>
  )
}

export default Code
