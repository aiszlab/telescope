import type { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const Td = ({ children }: Props) => {
  return <td className='min-w-[60px] pl-4 py-2 text-xs leading-7'>{children}</td>
}

export default Td
