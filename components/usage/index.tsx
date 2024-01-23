import { readFile } from 'fs/promises'
import { fileURLToPath } from 'url'
import { dirname, resolve, extname } from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import Playable from './playable'

interface Props {
  src: string
  title: string
  description: string
}

const Usage = async (props: Props) => {
  const src = resolve(dirname(fileURLToPath(import.meta.url)), '../../', props.src)
  const ext = extname(props.src)

  console.log('src====', src)
  console.log('ext====', ext)

  const [source, render] = await Promise.all([
    readFile(src)
      .then((file) => file.toString())
      .then((source) =>
        serialize(['```', ext, source, '```'].join(' '), {
          mdxOptions: {
            development: process.env.NODE_ENV === 'development',
            remarkPlugins: [remarkGfm],
            // @ts-ignore
            rehypePlugins: [rehypeHighlight]
          }
        })
      ),
    import(src)
  ])

  return <Playable title={props.title} description={props.description} render={render} source={source} />
}

export default Usage
