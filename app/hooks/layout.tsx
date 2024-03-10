import Navigated from '@/components/navigated'

interface Props {
  children: string
}

const Layout = (props: Props) => {
  return <Navigated type='hook'>{props.children}</Navigated>
}

export default Layout
