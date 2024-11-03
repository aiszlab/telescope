'use client'

import Icons from './icons'
import { Grid, useTheme } from 'musae'
import H2 from '@/components/mdx/h2'
import { Fragment, lazy, ReactElement, Suspense, type LazyExoticComponent } from 'react'
import * as action from 'musae/icons/action'
import * as alert from 'musae/icons/alert'
import * as content from 'musae/icons/content'
import * as editor from 'musae/icons/editor'
import * as hardware from 'musae/icons/hardware'
import * as image from 'musae/icons/image'
import * as navigation from 'musae/icons/navigation'
import * as toggle from 'musae/icons/toggle'
import * as mock from 'musae/icons/mock'
import { IconProps } from 'musae/types/icon'

interface IconGroup {
  key: string
  icons: Record<string, (props: Omit<IconProps, 'as'>) => React.FunctionComponentElement<IconProps>>
}

const ICON_GROUPS: IconGroup[] = [
  {
    key: 'action',
    icons: action
  },
  {
    key: 'alert',
    icons: alert
  },
  {
    key: 'content',
    icons: content
  },
  {
    key: 'editor',
    icons: editor
  },
  {
    key: 'hardware',
    icons: hardware
  },
  {
    key: 'image',
    icons: image
  },
  {
    key: 'navigation',
    icons: navigation
  },
  {
    key: 'toggle',
    icons: toggle
  },
  {
    key: 'mock',
    icons: mock
  }
]

const { Row } = Grid

const IconGroups = () => {
  const theme = useTheme()

  return ICON_GROUPS.map(({ icons, key: groupKey }) => {
    return (
      <Fragment key={groupKey}>
        <H2 className='uppercase mb-5'>{groupKey}</H2>

        <Row
          align='center'
          justify='center'
          gutter={12}
          style={{
            // @ts-expect-error
            '--primary': theme.colors.primary,
            '--on-primary': theme.colors['on-primary']
          }}
        >
          <Icons icons={icons} />
        </Row>
      </Fragment>
    )
  })
}

export default IconGroups
