'use client'

import { Button } from 'musae'
import { useRequest } from '@aiszlab/relax'

const mockRequest = (keyword: string) =>
  new Promise<string>((resolve) =>
    setTimeout(() => resolve(`查询结果：${keyword}`), 1000)
  )

const App = () => {
  const { data, loading, run } = useRequest(mockRequest, {
    auto: true,
    defaultParams: ['relax']
  })

  return (
    <div className='flex flex-col items-center gap-y-2'>
      <span>loading：{loading ? '是' : '否'}</span>
      <span>data：{data ?? '暂无'}</span>
      <Button onClick={() => run('hooks')}>手动请求</Button>
    </div>
  )
}

export default App
