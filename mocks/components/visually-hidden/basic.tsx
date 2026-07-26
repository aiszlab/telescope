'use client'
import { Button, VisuallyHidden } from 'musae'
import { IconCheckCircleOutline } from 'musae/icons'

const App = () => {
  return (
    <Button>
      <VisuallyHidden>Checkmark</VisuallyHidden>
      <IconCheckCircleOutline />
    </Button>
  )
}

export default App
