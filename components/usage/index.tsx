import { readFile } from 'fs/promises'
import { fileURLToPath } from 'url'
import { dirname, extname, join } from 'path'
import { type Props as PlayableProps } from './playable'
import Playground from './playground'

interface Source {
  src: string
  title: string
  description: string
}

interface Props {
  sources: Source[]
  columns?: 1 | 2
}

const Usage = async ({ sources, columns = 1 }: Props) => {
  const _sources = await Promise.all(
    sources.map<Promise<PlayableProps>>(async ({ src, description, title }) => {
      // get src ext
      const ext = extname(src).slice(1)

      const [render, source] = await Promise.all([
        import(`../../mocks${src}`).then((lazy) => lazy.default),
        readFile(join(dirname(fileURLToPath(import.meta.url)), '../../mocks', src))
          .catch(() => null)
          .then((file) => file?.toString())
          .then((source) => {
            if (!source) return null
            return `\`\`\`${ext}\n${source}\n\`\`\``
          })
          .then((markdown) => String(markdown ?? ''))
      ])

      return {
        description,
        title,
        source,
        render
      }
    })
  )

  return <Playground sources={_sources} columns={columns} />
}

export default Usage
