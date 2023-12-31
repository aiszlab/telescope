import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import clsx from 'clsx'
import Shell from './_layout'

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
          href='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github.min.css'
        />
      </head>
      <body className={clsx([inter.className, 'flex flex-col min-h-screen'])}>
        <Shell>{props.children}</Shell>
      </body>
    </html>
  )
}
