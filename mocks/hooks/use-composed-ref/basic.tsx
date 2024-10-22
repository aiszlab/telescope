'use client'
import { useComposedRef } from '@aiszlab/relax'
import { useRef } from 'react'

const App = () => {
  const colorRef = useRef<HTMLDivElement | null>(null)
  const heightRef = useRef<HTMLDivElement | null>(null)

  const ref = useComposedRef(colorRef, heightRef)

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
    <div>
      <span className='text-black'>尝试点击下方的元素，同时改变高度和颜色</span>
      <div ref={ref} className='text-blue-500 bg-slate-400 h-20 p-5 cursor-pointer' onClick={click}>
        被挂载的节点
      </div>
    </div>
  )
}

export default App
