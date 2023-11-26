import ComponentDocument from '@/components/component-document'
import BasicDemo from '@/demos/clock/basic'
import BasicCode from '@/demos/checkbox/basic/demo.mdx'
import Properties from '@/demos/checkbox/properties.mdx'

const Page = () => {
  return (
    <ComponentDocument
      title='分割线'
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
