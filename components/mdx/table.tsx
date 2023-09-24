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
      className='border-[1px]'
      style={{
        borderColor: theme.palettes.neutral[50]
      }}
    >
      {children}
    </table>
  )
}

export default Table
