'use client'
import { Fab } from 'musae'
import { IconAdd } from 'musae/icons'

const App = () => {
  return (
    <div style={{ position: 'relative', height: 200 }}>
      <Fab onClick={() => console.log('fab clicked')}>
        <IconAdd />
      </Fab>
    </div>
  )
}

export default App
