import { readFile } from 'fs/promises'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { compile } from '@mdx-js/mdx'
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
        compile(['```tsx', source, '```'].join(' '), {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [rehypeHighlight]
        })
      ),
    import(`../../mocks${src}`).then((lazy) => lazy.default)
  ])

  console.log('source====', source)

  return <Playable title={title} description={description} render={render} source={source.toString()} />
}

export default Usage
