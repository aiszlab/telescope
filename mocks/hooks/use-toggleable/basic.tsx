'use client'

import { Checkbox } from 'musae'
import { useToggleable } from '@aiszlab/relax'

const keys = [
  {
    key: '父节点',
    children: [
      { key: '子节点 1' },
      { key: '子节点 2' },
      { key: '子节点 3' }
    ]
  }
]

const App = () => {
  const { isToggled, toggle } = useToggleable(keys)

  return (
    <div className='flex flex-col gap-y-2'>
      {keys.map((node) => (
        <div key={node.key} className='flex flex-col gap-y-2'>
          <Checkbox checked={isToggled(node.key)} onChange={() => toggle(node.key)}>
            {node.key}
          </Checkbox>
          <div className='ml-6 flex flex-col gap-y-2'>
            {node.children?.map((child) => (
              <Checkbox
                key={child.key}
                checked={isToggled(child.key)}
                onChange={() => toggle(child.key)}
              >
                {child.key}
              </Checkbox>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default App
