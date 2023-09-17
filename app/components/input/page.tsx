'use client'

import ComponentDocument from '@/components/component-document'
import BasicDemo from '@/demos/input/basic'
import BasicCode from '@/demo/basic/readme.mdx'

const Page = () => {
  return (
    <ComponentDocument
      title='输入框'
      codeDemos={[
        {
          demo: <BasicDemo />,
          code: <BasicCode />
        }
      ]}
    />
  )
}

export default Page
