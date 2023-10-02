import ComponentDocument from '@/components/component-document'
import BasicDemo from '@/demos/breadcrumb/basic'
import BasicCode from '@/demos/breadcrumb/basic/demo.mdx'
import Properties from '@/demos/breadcrumb/properties.mdx'

const Page = async () => {
  return (
    <ComponentDocument
      title='面包屑'
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
