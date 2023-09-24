'use client'

import { type ReactNode } from 'react'
import CodeDemo, { Props as CodeDemoProps } from '../code-demo'
import styles from './styles.module.css'

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
      <h1 className='font-semibold text-3xl mb-4'>{props.title}</h1>

      {/* description */}
      {!!props.description && <p>{props.description}</p>}

      {!!props.codeDemos?.length && <h2 className='font-semibold text-2xl mt-8 mb-4'>代码演示</h2>}

      {props.codeDemos?.map((codeDemoProps, index) => (
        <CodeDemo key={index} {...codeDemoProps} />
      ))}

      {!!props.properties && (
        <div className={styles.properties}>
          <h2 className='font-semibold text-2xl mt-8 mb-4'>API</h2>
          {props.properties}
        </div>
      )}
    </article>
  )
}

export default ComponentDocument
