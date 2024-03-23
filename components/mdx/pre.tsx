'use client'
import { useTheme } from 'musae'
import { type ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const Pre = (props: Props) => {
  const theme = useTheme()

  return (
    <pre
      className='relative rounded my-3 p-4'
      style={{
        backgroundColor: theme.colors['surface-container-low']
      }}
    >
      {props.children}
    </pre>
  )
}

export default Pre
