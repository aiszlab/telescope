'use client'

import { useHover } from '@aiszlab/relax'
import { Button } from 'musae'

const App = () => {
  const [isHovered, hoverProps] = useHover()

  return (
    <div>
      <Button {...hoverProps}>尝试 hover</Button>
      {isHovered && <div>Hello World</div>}
    </div>
  )
}

export default App
