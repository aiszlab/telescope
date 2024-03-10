import Navigated from '@/components/navigated'

interface Props {
  children: string
}

const Layout = (props: Props) => {
  return <Navigated type='component'>{props.children}</Navigated>
}

export default Layout
