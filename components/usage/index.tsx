import { readFile } from 'fs/promises'
import { fileURLToPath } from 'url'
import { dirname, extname, join } from 'path'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import Playable from './playable'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'

interface Props {
  src: string
  title: string
  description: string
  id?: string
}

const Usage = async ({ src, title, description }: Props) => {
  // get src ext
  const ext = extname(src).slice(1)

  const [source, render] = await Promise.all([
    readFile(join(dirname(fileURLToPath(import.meta.url)), '../../mocks', src))
      .catch(() => null)
      .then((file) => file?.toString())
      .then((source) => {
        if (!source) return null

        return unified()
          .use(remarkParse) // Convert into markdown AST
          .use(remarkRehype) // Transform to HTML AST
          .use(rehypeSanitize) // Sanitize HTML input
          .use(rehypeStringify) // Convert AST into serialized HTML
          .use(remarkGfm)
          .use(rehypeHighlight)
          .process([['```', ext].join(''), source, '```'].join(' '))
      })
      .then((markdown) => String(markdown ?? '')),
    import(`../../mocks${src}`).then((lazy) => lazy.default)
  ])

  return <Playable title={title} description={description} render={render} source={source} />
}

export default Usage
