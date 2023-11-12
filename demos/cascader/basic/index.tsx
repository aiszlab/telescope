'use client'

import { Cascader } from 'musae'

const Basic = () => {
  return (
    <Cascader
      options={[
        {
          value: 'zhejiang',
          label: '浙江',
          children: [
            {
              value: 'hangzhou',
              label: '杭州',
              children: [
                {
                  value: 'xiaoshan',
                  label: '萧山',
                  children: [
                    {
                      value: 'xiaossssssshan',
                      label: 'ssssssssssss'
                    }
                  ]
                },
                {
                  value: 'shaoxing',
                  label: '绍兴'
                }
              ]
            }
          ]
        },
        {
          value: 'woman',
          label: '女'
        }
      ]}
    />
  )
}

export default Basic
