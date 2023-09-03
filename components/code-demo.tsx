import { ReactNode } from 'react'
import { Divider } from 'musae'

export interface Props {
  example: ReactNode
  codeBlock: ReactNode
}

const CodeDemo = (props: Props) => {
  return (
    <div className='border-2 rounded-lg border-gray-600 w-full'>
      <div className='p-6 flex justify-center'>{props.example}</div>

      <Divider />

      {/* 参数表单 */}
      <div className='p-6'>{props.codeBlock}</div>
    </div>
  )
}

export default CodeDemo
