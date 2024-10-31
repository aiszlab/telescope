'use client'
import action from 'musae/icons/action'
import alert from 'musae/icons/alert'
import content from 'musae/icons/content'
import editor from 'musae/icons/editor'
import hardware from 'musae/icons/hardware'
import image from 'musae/icons/image'
import navigation from 'musae/icons/navigation'
import toggle from 'musae/icons/toggle'
import mock from 'musae/icons/mock'

import { Grid, useMessage, useTheme } from 'musae'
import H2 from '@/components/mdx/h2'
import { Fragment } from 'react'
import { stringify } from '@aiszlab/relax/class-name'

const ICON_GROUPS = [
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

const { Row, Col } = Grid

const clipboard = async (value: string) => {
  return await navigator.clipboard.writeText(value)
}

const Icons = () => {
  const theme = useTheme()
  const [messager] = useMessage()

  const copy = (iconKey: string) => {
    clipboard(`<${iconKey} />`)
      .then(() => {
        messager.success({ description: '🎉 已复制到剪贴板' })
      })
      .catch(() => {
        messager.error({ description: '系统开小差了，请重试' })
      })
  }

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
          {Object.entries(icons).map(([key, Icon]) => {
            return (
              <Col
                key={key}
                span={4}
                className={stringify(
                  'w-32',
                  'px-4 py-2 transition-all rounded cursor-pointer',
                  'flex flex-col gap-2 items-center',
                  'max-xl:col-span-6',
                  'hover:text-[var(--on-primary)] hover:bg-[var(--primary)]'
                )}
              >
                <Icon size={48} />
                <div
                  className='text-ellipsis overflow-hidden text-sm font-medium max-w-full'
                  onClick={() => {
                    copy(key)
                  }}
                >
                  {key}
                </div>
              </Col>
            )
          })}
        </Row>
      </Fragment>
    )
  })
}

export default Icons
