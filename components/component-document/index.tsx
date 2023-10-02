'use client'

import { type ReactNode } from 'react'
import CodeDemo, { Props as CodeDemoProps } from '../code-demo'
import styles from './styles.module.css'
import H1 from '../mdx/h1'
import H2 from '../mdx/h2'

interface Props {
  title: string
  description?: string
  codeDemos?: CodeDemoProps[]
  properties?: ReactNode
}

const ComponentDocument = (props: Props) => {
  return (
    <article className='col-start-2 col-end-6 px-16 pb-8'>
      {/* title */}
      <H1>{props.title}</H1>

      {/* description */}
      {!!props.description && <p>{props.description}</p>}

      {!!props.codeDemos?.length && <H2>代码演示</H2>}

      {props.codeDemos?.map((codeDemoProps, index) => (
        <CodeDemo key={index} {...codeDemoProps} />
      ))}

      {!!props.properties && (
        <div className={styles.properties}>
          <H2>API</H2>
          {props.properties}
        </div>
      )}
    </article>
  )
}

export default ComponentDocument
