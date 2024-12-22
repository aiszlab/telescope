'use client'

import { Markdown } from 'musae'

const MARKDOWN = `
# Hello World

## This is a markdown file

\`\`\`tsx
const App = () => {
  return <div>render</div>
}
\`\`\`
`

const App = () => {
  return <Markdown value={MARKDOWN} />
}

export default App
