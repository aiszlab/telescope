'use client'
import { Loading } from 'musae'

const App = () => {
  return (
    <>
      <Loading overlay />
      <Loading overlay={false} />
    </>
  )
}

export default App
