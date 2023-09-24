import { FC, ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const Td: FC<Props> = ({ children }) => {
  return <td className='min-w-[60px] px-6 py-3'>{children}</td>
}

export default Td
