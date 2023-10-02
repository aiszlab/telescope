'use client'

import createCache from '@emotion/cache'
import { CacheProvider as _CacheProvider } from '@emotion/react'
import { type ReactNode } from 'react'

const cache = createCache({
  key: 'css',
  prepend: true
})

interface Props {
  children: ReactNode
}

const CacheProvider = (props: Props) => {
  return <_CacheProvider value={cache}>{props.children}</_CacheProvider>
}

export default CacheProvider
