'use client'
import clsx from 'clsx'
import { useTheme } from 'musae'
import { ReactNode } from 'react'
import styles from './styles.module.css'

interface Props {
  children?: ReactNode
}

const Thead = (props: Props) => {
  const theme = useTheme()

  return (
    <thead
      className={clsx(
        '[&>tr]:h-12',
        '[&>tr>th]:py-0 [&>tr>th]:align-middle [&>tr>th]:text-default-600 [&>tr>th]:text-xs [&>tr>th]:text-left [&>tr>th]:pl-4',
        '[&>tr>th:first-child]:rounded-l-lg [&>tr>th:last-child]:rounded-r-lg',
        styles.head
      )}
      style={{
        // @ts-ignore
        '--table-header-bg': theme.colors['surface-container-highest']
      }}
    >
      {props.children}
    </thead>
  )
}

export default Thead
