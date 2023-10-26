import ComponentDocument from '@/components/component-document'
import BasicDemo from '@/demos/drawer/basic'
import BasicCode from '@/demos/divider/basic/demo.mdx'
import Properties from '@/demos/divider/properties.mdx'

const Page = () => {
  return (
    <ComponentDocument
      title='抽屉'
      codeDemos={[
        {
          title: '对齐方式',
          demo: <BasicDemo />,
          code: <BasicCode />
        }
      ]}
      properties={<Properties />}
    />
  )
}

export default Page
