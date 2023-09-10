'use client'

import ComponentDocument from '@/components/component-document'
import BasicReadme from './demo/basic/readme.mdx'
import BasicDemo from './demo/basic'
import * as Api from './demo/api.mdx'

const Page = () => {
  console.log('Api====', Api)

  return (
    <ComponentDocument
      title='按钮'
      description='按钮用于开始一个即时操作。'
      codeDemos={[
        {
          example: <BasicDemo />,
          codeBlock: <BasicReadme />
        }
      ]}
    />
  )
}

export default Page
