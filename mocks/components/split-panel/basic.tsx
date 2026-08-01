'use client'
import { SplitPanel } from 'musae'

const App = () => {
  return (
    <SplitPanel
      items={[
        {
          defaultSize: 30,
          children: (
            <div style={{ padding: 16 }}>
              <h4>左侧面板</h4>
              <p>默认占 30% 宽度</p>
            </div>
          ),
        },
        {
          children: (
            <div style={{ padding: 16 }}>
              <h4>右侧面板</h4>
              <p>自适应剩余宽度</p>
            </div>
          ),
        },
      ]}
    />
  )
}

export default App
