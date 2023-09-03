'use client'

import ComponentDocument from '@/components/component-document'
import BasicReadme from './demo/basic/readme.mdx'
import { Button } from 'musae'

const Page = () => {
  return (
    <ComponentDocument
      title='按钮'
      codeDemos={[
        {
          example: <Button />,
          codeBlock: <BasicReadme />
        }
      ]}
    />
  )
}

export default Page
