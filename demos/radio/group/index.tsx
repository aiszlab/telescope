'use client'

import { Radio } from 'musae'

const RadioGroup = Radio.Group

const Group = () => {
  return (
    <RadioGroup>
      <Radio value='A'>A</Radio>
      <Radio value='B'>B</Radio>
    </RadioGroup>
  )
}

export default Group
