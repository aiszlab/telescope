import ComponentDocument from '@/components/component-document'
import BasicDemo from '@/demos/select/basic'
import BasicCode from '@/demos/input/basic/demo.mdx'
import MultipleDemo from '@/demos/select/multiple'
import MultipleCode from '@/demos/select/multiple/demo.mdx'
import Properties from '@/demos/input/properties.mdx'

const Page = () => {
  return (
    <ComponentDocument
      title='输入框'
      codeDemos={[
        {
          demo: <BasicDemo />,
          code: <BasicCode />
        },
        {
          demo: <MultipleDemo />,
          code: <MultipleCode />
        }
      ]}
      properties={<Properties />}
    />
  )
}

export default Page
