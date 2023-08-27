interface Props {
  title: string
  description?: string
  codeDemos: string[]
}

const PowerPoint = (props: Props) => {
  return (
    <article className='col-start-2 col-end-6 px-16 pb-8'>
      {/* title */}
      <h1 className='font-semibold text-3xl mb-4'>{props.title}</h1>

      {/* description */}
      {!!props.description && <p>{props.description}</p>}

      {/* code demos */}
      {!!props.codeDemos.length && (
        <>
          <h2 className='font-semibold text-2xl'>代码演示</h2>

          {props.codeDemos.map((codeDemo) => {
            return <div key={codeDemo}>1</div>
          })}
        </>
      )}

      <code>按钮类型</code>
    </article>
  )
}

export default PowerPoint
