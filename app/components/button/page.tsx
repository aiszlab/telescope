'use client'

import ComponentDocument from '@/components/component-document'
import BasicReadme from './demo/basic/readme.mdx'
import BasicDemo from './demo/basic'

const Page = () => {
  return (
    <ComponentDocument
      title='按钮'
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
