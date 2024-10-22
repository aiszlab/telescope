import { Bedtime, Github, WbSunny } from 'musae/icons'
import { Button, useTheme, I18nButton } from 'musae'
import type { Locale } from 'musae/types/locale'

interface Props {
  onLocaleChange: (locale?: Locale) => void
}

const Toolbar = ({ onLocaleChange }: Props) => {
  const { mode, toggle } = useTheme()

  return (
    <ul className='flex items-center justify-end gap-x-2 list-none'>
      <li>
        <I18nButton onChange={onLocaleChange} variant='text' />
      </li>
      <li>
        <Button shape='circular' variant='text' onClick={toggle}>
          {mode === 'dark' ? <WbSunny /> : <Bedtime />}
        </Button>
      </li>
      <li>
        <a target='_blank' href='https://github.com/aiszlab/musae'>
          <Button shape='circular' variant='text'>
            <Github />
          </Button>
        </a>
      </li>
    </ul>
  )
}

export default Toolbar
