'use client'

import { useHover } from '@aiszlab/relax'

const Basic = () => {
  const { isHovered, ...hoverProps } = useHover()

  return (
    <div>
      <button {...hoverProps}>尝试 hover</button>
      {isHovered && <div>Hello World</div>}
    </div>
  )
}

export default Basic
