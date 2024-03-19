'use client'

import { Waterfall } from 'musae'

const heights = [150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80]

const Basic = () => {
  return (
    <Waterfall gutter={[8, 8]}>
      {heights.map((height, index) => {
        return (
          <div
            key={index}
            className='bg-purple-400 text-white rounded flex justify-center items-center shadow'
            style={{ height }}
          >
            {index + 1}
          </div>
        )
      })}
    </Waterfall>
  )
}

export default Basic
