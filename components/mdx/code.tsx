'use client'

import { type ReactNode } from 'react'
import { useTheme } from 'musae'
import { stringify } from '@aiszlab/relax/class-name'

interface Props {
  children?: ReactNode
  className?: string
}

const Code = (props: Props) => {
  const theme = useTheme()
  return (
    <code
      className={stringify(props.className, 'py-0.5 px-1.5 mx-0.5 rounded text-xs inline-block align-text-bottom')}
      style={{
        backgroundColor: theme.colors['surface-container-low'],
        color: theme.colors['on-surface']
      }}
    >
      {props.children}
    </code>
  )
}

export default Code
