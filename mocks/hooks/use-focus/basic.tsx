'use client'

import { useFocus } from '@aiszlab/relax'
import { Input } from 'musae'

const App = () => {
  const [isFocused, focusProps] = useFocus()

  return (
    <div>
      <Input {...focusProps} placeholder='尝试 focus' />
      {isFocused && <div>Hello World</div>}
    </div>
  )
}

export default App
