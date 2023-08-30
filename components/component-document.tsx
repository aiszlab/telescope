'use client'

import CodeSandbox from './code-sandbox'

interface Props {
  title: string
  description?: string
}

const ComponentDocument = (props: Props) => {
  return (
    <article className='col-start-2 col-end-6 px-16 pb-8'>
      {/* title */}
      <h1 className='font-semibold text-3xl mb-4'>{props.title}</h1>

      {/* description */}
      {!!props.description && <p>{props.description}</p>}

      <code>按钮类型</code>

      <CodeSandbox />
    </article>
  )
}

export default ComponentDocument
