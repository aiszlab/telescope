import Editor from '@monaco-editor/react'

interface Props {
  value: string
}

const MonacoEditor = (props: Props) => {
  return <Editor value={props.value} defaultLanguage='typescript' />
}

export default MonacoEditor
