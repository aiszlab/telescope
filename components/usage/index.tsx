import { readFile } from 'fs/promises'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import Playable from './playable'

interface Props {
  src: string
  title: string
  description: string
}

const Usage = async ({ src, title, description }: Props) => {
  const [source, render] = await Promise.all([
    readFile(join(dirname(fileURLToPath(import.meta.url)), '../../mocks', `${src}.tsx`))
      .then((file) => file.toString())
      .then((source) =>
        serialize(['```tsx', source, '```'].join(' '), {
          mdxOptions: {
            development: process.env.NODE_ENV === 'development',
            remarkPlugins: [remarkGfm],
            // @ts-ignore
            rehypePlugins: [rehypeHighlight]
          }
        })
      ),
    import(`../../mocks${src}`).then((lazy) => lazy.default)
  ])

  return <Playable title={title} description={description} render={render} source={source} />
}

export default Usage
