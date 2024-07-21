'use client'

import { Waterfall } from 'musae'
import Playable, { Props as PlayableProps } from './playable'

interface Props {
  sources: PlayableProps[]
  columns: 1 | 2
}

const Playground = ({ sources, columns }: Props) => {
  return (
    <Waterfall columns={columns} gutter={12} sequential>
      {sources.map((source, index) => {
        return <Playable key={index} {...source} />
      })}
    </Waterfall>
  )
}

export default Playground
