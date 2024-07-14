'use client'
import { Checkbox } from 'musae'

const App = () => {
  return (
    <Checkbox.Group disabled value={['A']}>
      <Checkbox value='A'>A</Checkbox>
      <Checkbox value='B'>B</Checkbox>
      <Checkbox value='C' disabled={false}>
        C
      </Checkbox>
    </Checkbox.Group>
  )
}

export default App
