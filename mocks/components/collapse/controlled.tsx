'use client'
import { Space, Collapse } from 'musae'
import { useState, type Key } from 'react'

const App = () => {
  const [collapseActive, setCollapseActive] = useState<Key[]>(['1'])
  const [accordionActive, setAccordionActive] = useState<Key>('1')

  const changeCollapse = (value: Key[]) => {
    setCollapseActive(value)
  }
  const changeAccordion = (value: Key) => {
    setAccordionActive(value)
  }

  return (
    <Space type='vertical'>
      <Collapse
        activeKey={collapseActive}
        onChange={changeCollapse}
        items={[
          {
            key: '1',
            label: 'Collapse 1',
            children: 'Content of the first panel'
          },
          {
            key: '2',
            label: 'Collapse 2',
            children: 'Content of the second panel'
          },
          {
            key: '3',
            label: 'Collapse 3',
            children: 'Content of the third panel'
          }
        ]}
      />

      <Collapse
        activeKey={accordionActive}
        onChange={changeAccordion}
        accordion
        items={[
          {
            key: '1',
            label: 'Collapse 1',
            children: 'Content of the first panel'
          },
          {
            key: '2',
            label: 'Collapse 2',
            children: 'Content of the second panel'
          },
          {
            key: '3',
            label: 'Collapse 3',
            children: 'Content of the third panel'
          }
        ]}
      />
    </Space>
  )
}

export default App
