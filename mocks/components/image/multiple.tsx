'use client'
import { Image } from 'musae'

const IMAGES = [
  {
    src: 'https://mui.com/static/material-ui/react-components/autocomplete-light.png',
    alt: 'autocomplete'
  },
  {
    src: 'https://mui.com/static/material-ui/react-components/button-light.png',
    alt: 'button-light'
  }
]

const Multiple = () => {
  return (
    <Image.Group items={IMAGES.map((item) => item.src)}>
      {IMAGES.map((item) => {
        return <Image src={item.src} alt={item.alt} key={item.alt} width={200} />
      })}
    </Image.Group>
  )
}

export default Multiple
