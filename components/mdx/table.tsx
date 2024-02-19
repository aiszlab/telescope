'use client'

import { useTheme } from 'musae'
import { FC, ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const Table: FC<Props> = ({ children }) => {
  const theme = useTheme()

  return (
    <div className='w-full overflow-auto'>
      <table
        className='border-[1px] min-w-full table-auto'
        style={{
          borderColor: theme.colors['outline']
        }}
      >
        {children}
      </table>
    </div>
  )
}

export default Table
