'use client'

import { useHover } from '@aiszlab/relax'
import { Button } from 'musae'

const Basic = () => {
  const [isHovered, hoverProps] = useHover()

  return (
    <div>
      <Button {...hoverProps}>尝试 hover</Button>
      {isHovered && <div>Hello World</div>}
    </div>
  )
}

export default Basic
