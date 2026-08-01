'use client'
import { Layout } from 'musae'

const { Header, Sidebar, Main, Footer } = Layout

const App = () => {
  return (
    <Layout>
      <Header style={{ padding: 16, background: 'var(--color-surface-container)', borderBottom: '1px solid var(--color-outline-variant)' }}>
        <h3>Header 顶部栏</h3>
      </Header>
      <Layout>
        <Sidebar style={{ padding: 16, width: 200, background: 'var(--color-surface-container-low)' }}>
          <p>Sidebar 侧边栏</p>
        </Sidebar>
        <Main style={{ padding: 16 }}>
          <p>Main 主内容区域</p>
        </Main>
      </Layout>
      <Footer style={{ padding: 16, background: 'var(--color-surface-container)', borderTop: '1px solid var(--color-outline-variant)' }}>
        <p>Footer 底部栏</p>
      </Footer>
    </Layout>
  )
}

export default App
