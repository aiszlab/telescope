import { Button, Input } from 'musae'

const CodeSandbox = () => {
  return (
    <div className='border-2 rounded-lg border-gray-600 w-full'>
      <div className='p-4 flex justify-center'>
        <Button></Button>
      </div>

      {/* TODO 组件 divider */}

      {/* 参数表单 */}
      <div>
        <div className='p-4 flex flex-row'>
          <div className='flex-1'>参数1</div>
          <div className='flex-1'>
            <Input type='text' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodeSandbox
