import { ReactNode } from 'react'

export interface Props {
  demo: ReactNode
  code: ReactNode
}

const CodeDemo = (props: Props) => {
  return (
    <div className='border-2 rounded-lg border-gray-600 w-full'>
      <div className='p-6 flex justify-center'>{props.demo}</div>
      <div className='rounded-lg'>{props.code}</div>
    </div>
  )
}

export default CodeDemo
