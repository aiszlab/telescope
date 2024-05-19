'use client'

import { useControlledState } from '@aiszlab/relax'
import { Input } from 'musae'
import { useState } from 'react'

const ControlledInput = (props: { value: string; onChange: (value: string) => void }) => {
  const [value] = useControlledState(props.value)

  const change = (value: string) => {
    props.onChange(value)
  }

  return <Input value={value} onChange={change} />
}

const App = () => {
  const [value, setValue] = useState('')
  const change = (value: string) => {
    setValue(value)
  }

  return <ControlledInput value={value} onChange={change} />
}

export default App
