'use client'

import { type FC, createElement } from 'react'
import { useTheme, Button, Divider, Markdown } from 'musae'
import H4 from '@/components/mdx/h4'
import P from '@/components/mdx/p'
import { useBoolean } from '@aiszlab/relax'
import { stringify } from '@aiszlab/relax/class-name'

export interface Props {
  title: string
  render: FC
  source: string
  description: string
}

const Playable = ({ title, render, source, description }: Props) => {
  const theme = useTheme()
  const [isCollapsed, { toggle }] = useBoolean(true)

  return (
    <div>
      <H4 id={title}>{title}</H4>

      <P>{description}</P>

      <div
        className='border-[1px] rounded-lg my-4 border-solid'
        style={{
          borderColor: theme.colors['outline-variant']
        }}
      >
        {/* 渲染 */}
        <div className='p-6 overflow-x-auto'>{createElement(render)}</div>

        <Divider />

        <div className='flex justify-end p-2'>
          <Button variant='outlined' onClick={toggle} size='small'>
            {isCollapsed ? 'Expand code' : 'Collapse code'}
          </Button>
        </div>

        {!isCollapsed && <Divider />}

        {/* 代码块 */}
        <div className={stringify(isCollapsed && 'hidden')}>
          <Markdown value={source} />
        </div>
      </div>
    </div>
  )
}

export default Playable
