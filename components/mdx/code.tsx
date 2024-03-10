import { type ReactNode } from 'react'
import clsx from 'clsx'

interface Props {
  children?: ReactNode
  className?: string
}

const Code = (props: Props) => {
  return (
    <code
      className={clsx(props.className)}
      style={{
        backgroundColor: 'transparent'
      }}
    >
      {props.children}
    </code>
  )
}

export default Code
