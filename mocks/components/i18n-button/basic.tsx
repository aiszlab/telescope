'use client'
import { I18nButton } from 'musae'

const App = () => {
  return <I18nButton onChange={(locale) => console.log('切换语言:', locale)} />
}

export default App
