'use client'

import { Waterfall } from 'musae'
import Playable, { Props as PlayableProps } from './playable'

interface Props {
  sources: PlayableProps[]
  small: boolean
}

const Playground = ({ sources, small }: Props) => {
  return (
    <Waterfall columns={small ? 2 : 1} gutter={12}>
      {sources.map((source, index) => {
        return <Playable key={index} {...source} />
      })}
    </Waterfall>
  )
}

export default Playground
