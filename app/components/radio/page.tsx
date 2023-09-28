import ComponentDocument from '@/components/component-document'
import BasicDemo from '@/demos/radio/basic'
import BasicCode from '@/demos/input/basic/demo.mdx'
import Properties from '@/demos/radio/properties.mdx'

const Page = () => {
  return (
    <ComponentDocument
      title='单选框'
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
