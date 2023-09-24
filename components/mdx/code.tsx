import { useMemo, type ReactNode, type CSSProperties } from 'react'

interface Props {
  children?: ReactNode
  className?: string
}

const Code = (props: Props) => {
  const style = useMemo<CSSProperties | undefined>(() => {
    if (props.className) return void 0

    return {
      margin: '0px 1px',
      padding: '0.2rem 0.4rem',
      fontSize: '0.75rem',
      background: 'rgba(0, 0, 0, 0.04)',
      border: '1px solid rgba(5, 5, 5, 0.06)',
      borderRadius: 4
    }
  }, [props.className])

  return (
    <code className={props.className} style={style}>
      {props.children}
    </code>
  )
}

export default Code
