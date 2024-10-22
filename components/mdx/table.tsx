import { FC, ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const Table: FC<Props> = ({ children }) => {
  return (
    <div className='w-full overflow-auto'>
      <table className='min-w-full table-auto border-collapse'>{children}</table>
    </div>
  )
}

export default Table
