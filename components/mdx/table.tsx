'use client'

import { useTheme } from 'musae'
import { FC, ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const Table: FC<Props> = ({ children }) => {
  const theme = useTheme()

  return (
    <table
      className='border-[1px] min-w-full'
      style={{
        borderColor: theme.colors['outline']
      }}
    >
      {children}
    </table>
  )
}

export default Table
