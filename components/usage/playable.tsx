'use client'

import { FC, createElement, useContext } from 'react'
import { useTheme, Button, Divider } from 'musae'
import { useBoolean, useMount } from '@aiszlab/relax'
import clsx from 'clsx'
import { Context } from '@/hooks/use-float-nav'
import H4 from '@/components/mdx/h4'
import P from '@/components/mdx/p'

interface Props {
  title: string
  render: FC
  source: string
  description: string
  className?: string
}

const Playable = ({ title, render, source, description, className }: Props) => {
  const theme = useTheme()
  const [isCollapsed, { toggle }] = useBoolean(true)
  const register = useContext(Context)?.register

  useMount(() => {
    register?.(title, 'child')
  })

  return (
    <div className={className}>
      <H4>{title}</H4>

      <P>{description}</P>

      <div
        className='border-[1px] rounded-lg my-4'
        style={{
          borderColor: theme.colors['outline-variant']
        }}
        id={title}
      >
        {/* 渲染 */}
        <div className='p-6 flex justify-center'>{createElement(render)}</div>

        <Divider />

        <div className='flex justify-end p-2'>
          <Button variant='outlined' onClick={toggle} size='small'>
            {isCollapsed ? 'Expand code' : 'Collapse code'}
          </Button>
        </div>

        {!isCollapsed && <Divider />}

        {/* 代码块 */}
        <div
          className={clsx({ 'h-0': isCollapsed }, 'overflow-hidden rounded-lg')}
          dangerouslySetInnerHTML={{
            __html: source
          }}
        />
      </div>
    </div>
  )
}

export default Playable
