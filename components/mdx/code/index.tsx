'use client'
import { type ReactNode } from 'react'
import styles from './styles.module.css'
import { useTheme } from 'musae'
import { clsx } from '@aiszlab/relax'

interface Props {
  children?: ReactNode
  className?: string
}

const Code = (props: Props) => {
  const theme = useTheme()
  return (
    <code
      className={clsx(props.className, styles.code, 'py-0.5 rounded text-xs')}
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
