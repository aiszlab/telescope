'use client'
import { Button, VisuallyHidden } from 'musae'
import { CheckCircleOutline } from 'musae/icons'

const App = () => {
  return (
    <Button>
      <VisuallyHidden>Checkmark</VisuallyHidden>
      <CheckCircleOutline />
    </Button>
  )
}

export default App
