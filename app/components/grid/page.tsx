'use client'

import ComponentDocument from '@/components/component-document'
import BasicDemo from '@/demos/input/basic'
import BasicCode from '@/demos/input/basic?raw'
import Properties from '@/demos/input/properties.mdx'

const Page = () => {
  return (
    <ComponentDocument
      title='Grid 栅格'
      description='在多数业务情况下，需要在设计区域内解决大量信息收纳的问题，musae 将整个设计建议区域按照 24 等分的原则进行划分。'
      codeDemos={[
        {
          demo: <BasicDemo />,
          code: <BasicCode />
        }
      ]}
      properties={<Properties />}
    />
  )
}

export default Page
