import ComponentDocument from '@/components/component-document'
import BasicDemo from '@/demos/dialog/basic'
import BasicCode from '@/demos/divider/basic/demo.mdx'
import Properties from '@/demos/divider/properties.mdx'

const Page = () => {
  return (
    <ComponentDocument
      title='对话框'
      codeDemos={[
        {
          title: '基本使用',
          demo: <BasicDemo />,
          code: <BasicCode />
        }
      ]}
      properties={<Properties />}
    />
  )
}

export default Page
