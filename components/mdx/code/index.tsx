'use client'
import { type ReactNode } from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'
import { useTheme } from 'musae'

interface Props {
  children?: ReactNode
}

const Code = (props: Props) => {
  const theme = useTheme()
  return (
    <code
      className={clsx(styles['code-line'], 'px-1.5 py-0.5 rounded text-xs mx-0.5')}
      style={{
        // @ts-ignore
        '--code-line-color': theme.colors['on-surface-variant'],
        '--code-line-bg': theme.colors['surface-container']
      }}
    >
      {props.children}
    </code>
  )
}

export default Code
