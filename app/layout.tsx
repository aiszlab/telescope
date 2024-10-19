import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import Provided from '@/components/provided'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'aisz实验室',
  description: '这里有很多奇奇怪怪的东西，等你来探索'
}

interface Props {
  children: ReactNode
}

export default function Layout(props: Props) {
  return (
    <html lang='zh_CN'>
      <head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github.min.css'
          // https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css
        />
      </head>

      <body className={inter.className}>
        <Provided>{props.children}</Provided>
      </body>

      <GoogleAnalytics gaId='G-4S32MV4L55' />
    </html>
  )
}
