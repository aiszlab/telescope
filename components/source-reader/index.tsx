import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import { PluggableList } from 'unified'
import { useMDXComponents } from '@/mdx-components'
import { useState } from 'react'
import { useMounted } from '@aiszlab/relax'

interface Props {
  value: string
  language?: 'tsx' | 'jsx'
}

const SourceReader = ({ value, language = 'tsx' }: Props) => {
  const components = useMDXComponents({})
  const [source, setSource] = useState<MDXRemoteSerializeResult | null>()

  useMounted(async () => {
    const _source = await serialize(['```', language, value, '```'].join(' '), {
      mdxOptions: {
        development: process.env.NODE_ENV === 'development',
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeHighlight] as PluggableList
      }
    })

    setSource(_source)
  })

  if (!source) return

  return <MDXRemote {...source} components={components} />
}

export default SourceReader
