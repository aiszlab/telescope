'use client'

import { type ReactNode } from 'react'
import { useTheme, Button, Divider } from 'musae'
import { useBoolean } from '@aiszlab/relax'
import SourceReader from '../source-reader'
import clsx from 'clsx'

interface Props {
  title: string
  player: ReactNode
  source: string
  description: string
}

const Playable = ({ title, player, source }: Props) => {
  const theme = useTheme()
  const { isOn: isCollapsed, toggle } = useBoolean(true)

  return (
    <div
      className='border-2 rounded-lg my-4'
      style={{
        borderColor: theme.palettes.neutral[50]
      }}
    >
      {/* 渲染 */}
      <div className='p-6 flex justify-center'>{player}</div>

      {/* 分割线 */}
      <Divider align='left'>{title}</Divider>

      {/* 代码块 */}
      <div className='rounded-lg'>
        <div className={clsx({ 'h-0': isCollapsed }, 'overflow-hidden')}>
          <SourceReader value={source} />
        </div>

        <div className='flex flex-col items-center'>
          <Button variant='text' onClick={toggle}>
            {isCollapsed ? '展开' : '收起'}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Playable
