'use client'

import Icons from './icons'
import { Grid, useTheme } from 'musae'
import H2 from '@/components/mdx/h2'
import { Fragment, lazy, Suspense, type LazyExoticComponent } from 'react'

interface IconGroup {
  key: string
  icons: LazyExoticComponent<() => JSX.Element>
}

const ICON_GROUPS: IconGroup[] = [
  {
    key: 'action',
    icons: import('musae/icons/action')
  },
  {
    key: 'alert',
    icons: import('musae/icons/alert')
  },
  {
    key: 'content',
    icons: import('musae/icons/content')
  },
  {
    key: 'editor',
    icons: import('musae/icons/editor')
  },
  {
    key: 'hardware',
    icons: import('musae/icons/hardware')
  },
  {
    key: 'image',
    icons: import('musae/icons/image')
  },
  {
    key: 'navigation',
    icons: import('musae/icons/navigation')
  },
  {
    key: 'toggle',
    icons: import('musae/icons/toggle')
  },
  {
    key: 'mock',
    icons: import('musae/icons/mock')
  }
].map(({ key, icons }) => {
  return {
    key,
    icons: lazy(() => icons.then(({ default: _, ..._icons }) => ({ default: () => <Icons icons={_icons} /> })))
  }
})

const { Row } = Grid

const IconGroups = () => {
  const theme = useTheme()

  return ICON_GROUPS.map(({ icons: Icons, key: groupKey }) => {
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
          <Suspense>
            <Icons />
          </Suspense>
        </Row>
      </Fragment>
    )
  })
}

export default IconGroups
