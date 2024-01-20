import { type ReactNode } from 'react'
import { useTheme, Button, Divider } from 'musae'
import { useBoolean } from '@aiszlab/relax'

export interface Props {
  title?: string
  demo: ReactNode
  code: ReactNode
}

const CodeDemo = (props: Props) => {
  const theme = useTheme()
  const { isOn: isCollapsed, toggle } = useBoolean(true)

  return (
    <div
      className='border-2 rounded-lg my-4'
      style={{
        borderColor: theme.colors['outline']
      }}
    >
      {/* 渲染 */}
      <div className='p-6 flex justify-center'>{props.demo}</div>

      {/* 分割线 */}
      <Divider align='left'>{props.title}</Divider>

      {/* 代码块 */}
      <div className='rounded-lg'>
        {!isCollapsed && props.code}

        <div className='flex flex-col items-center'>
          <Button variant='text' onClick={toggle}>
            {isCollapsed ? '展开' : '收起'}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CodeDemo
