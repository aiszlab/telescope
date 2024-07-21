import { readFile } from 'fs/promises'
import { fileURLToPath } from 'url'
import { dirname, extname, join } from 'path'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import { Props as PlayableProps } from './playable'
import Playground from './playground'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'

interface Source {
  src: string
  title: string
  description: string
}

interface Props {
  sources: Source[]
  small?: boolean
}

const Usage = async ({ sources, small = false }: Props) => {
  const _sources = await Promise.all(
    sources.map<Promise<PlayableProps>>(async ({ src, description, title }) => {
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

      return {
        description,
        title,
        source,
        render
      }
    })
  )

  return <Playground sources={_sources} columns={small ? 2 : 1} />
}

export default Usage
