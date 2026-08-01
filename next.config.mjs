import createMDX from '@next/mdx'

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  reactStrictMode: false,
  turbopack: {
    root: process.cwd()
  }
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: ['remark-gfm'],
    rehypePlugins: [
      [
        '@shikijs/rehype',
        {
          themes: {
            light: 'vitesse-light',
            dark: 'vitesse-dark'
          },
          langs: ['ts', 'tsx', 'css', 'bash', 'js']
        }
      ]
    ]
  }
})

export default withMDX(nextConfig)
