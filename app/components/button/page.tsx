import ComponentDocument from '@/components/component-document'
import BasicDemo from '@/demos/button/basic'
import BasicCode from '@/demos/button/basic/demo.mdx'

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
    />
  )
}

export default Page
