import type { MDXComponents } from 'mdx/types'
import Td from '@/components/mdx/td'
import Table from '@/components/mdx/table'
import Code from '@/components/mdx/code'
import H1 from '@/components/mdx/h1'
import H2 from '@/components/mdx/h2'
import H3 from '@/components/mdx/h3'
import Pre from '@/components/mdx/pre'
import P from '@/components/mdx/p'
import H4 from '@/components/mdx/h4'
import Ul from '@/components/mdx/ul'
import Ol from '@/components/mdx/ol'
import Thead from '@/components/mdx/thead'
import Anchor from '@/components/mdx/anchor'

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    ...components,
    td: Td,
    table: Table,
    code: Code,
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    pre: Pre,
    p: P,
    ul: Ul,
    thead: Thead,
    a: Anchor,
    ol: Ol
  }
}
