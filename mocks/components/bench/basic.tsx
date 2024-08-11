'use client'
import { Avatar, Bench } from 'musae'

const App = () => {
  return (
    <Bench
      title='aisz.dev'
      navigations={[
        {
          path: '/components',
          label: '组件',
          children: [
            {
              label: '布局组件',
              path: '/components/layout'
            }
          ]
        },
        {
          path: '/hooks',
          label: 'hooks'
        }
      ]}
      trailing={
        <>
          <Avatar alt='Bob' />
        </>
      }
    >
      {/* 页面主题内容 */}
      测试组件
    </Bench>
  )
}

export default App
