import ComponentDocument from '@/components/component-document'
import BasicDemo from '@/demos/input/basic'
import BasicCode from '@/demos/input/basic/demo.mdx'
import Properties from '@/demos/input/properties.mdx'

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
      properties={<Properties />}
    />
  )
}

export default Page
