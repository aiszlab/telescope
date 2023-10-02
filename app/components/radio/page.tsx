import ComponentDocument from '@/components/component-document'
import BasicDemo from '@/demos/radio/basic'
import BasicCode from '@/demos/radio/basic/demo.mdx'
import GroupDemo from '@/demos/radio/group'
import GroupCode from '@/demos/radio/group/demo.mdx'
import DisabledDemo from '@/demos/radio/disabled'
import Properties from '@/demos/radio/properties.mdx'

const Page = () => {
  return (
    <ComponentDocument
      title='单选框'
      codeDemos={[
        {
          demo: <BasicDemo />,
          code: <BasicCode />
        },
        {
          demo: <GroupDemo />,
          code: <GroupCode />
        },
        {
          demo: <DisabledDemo />,
          code: <GroupCode />
        }
      ]}
      properties={<Properties />}
    />
  )
}

export default Page
