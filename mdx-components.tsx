import type { MDXComponents } from 'mdx/types'
import Td from '@/components/mdx/td'
import Th from '@/components/mdx/th'
import Table from '@/components/mdx/table'
import Code from '@/components/mdx/code'

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
    th: Th,
    table: Table,
    code: Code
  }
}
