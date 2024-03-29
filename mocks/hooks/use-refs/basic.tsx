'use client'

import { useRefs } from '@aiszlab/relax'
import { useRef } from 'react'

const Basic = () => {
  const colorRef = useRef<HTMLDivElement | null>(null)
  const heightRef = useRef<HTMLDivElement | null>(null)

  const ref = useRefs(colorRef, heightRef)

  const changeColor = () => {
    colorRef.current?.attributeStyleMap.set('color', 'red')
  }
  const changeHeight = () => {
    heightRef.current?.attributeStyleMap.set('height', '200px')
  }
  const click = () => {
    changeColor()
    changeHeight()
  }

  return (
    <div ref={ref} className='text-blue-500 bg-slate-400 h-20 p-5' onClick={click}>
      被挂载的节点
    </div>
  )
}

export default Basic
