import ComponentDocument from '@/components/component-document'
import BasicDemo from '@/demos/calendar/basic'
import BasicCode from '@/demos/button/basic/demo.mdx'
import Properties from '@/demos/button/properties.mdx'

const Page = async () => {
  return (
    <ComponentDocument
      title='按钮'
      description='按钮用于开始一个即时操作。'
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
