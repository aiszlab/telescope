'use client'

import CodeDemo, { Props as CodeDemoProps } from './code-demo'

interface Props {
  title: string
  description?: string
  codeDemos?: CodeDemoProps[]
}

const ComponentDocument = (props: Props) => {
  return (
    <article className='col-start-2 col-end-6 px-16 pb-8'>
      {/* title */}
      <h1 className='font-semibold text-3xl mb-4'>{props.title}</h1>

      {/* description */}
      {!!props.description && <p>{props.description}</p>}

      <code>按钮类型</code>

      {!!props.codeDemos?.length && <h2 className='font-semibold text-2xl mt-8 mb-4'>代码演示</h2>}

      {props.codeDemos?.map((codeDemoProps, index) => (
        <CodeDemo key={index} {...codeDemoProps} />
      ))}
    </article>
  )
}

export default ComponentDocument
