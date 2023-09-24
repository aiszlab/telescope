'use client'

import { useTheme } from 'musae'
import { FC, ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const Th: FC<Props> = ({ children }) => {
  const theme = useTheme()

  return (
    <th
      className='py-3 px-6 border-b-2 text-start whitespace-nowrap'
      style={{
        backgroundColor: theme.palettes.neutral[95],
        borderColor: theme.palettes.neutral[50]
      }}
    >
      {children}
    </th>
  )
}

export default Th
