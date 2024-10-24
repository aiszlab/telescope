import { Bedtime, Github, WbSunny } from 'musae/icons'
import { Button, useTheme, I18nButton, IconButton } from 'musae'
import type { Locale } from 'musae/types/locale'

interface Props {
  onLocaleChange: (locale?: Locale) => void
}

const Toolbar = ({ onLocaleChange }: Props) => {
  const { mode, toggle } = useTheme()

  return (
    <ul className='flex items-center justify-end gap-x-2 list-none m-0 p-0'>
      <li>
        <I18nButton onChange={onLocaleChange} variant='text' size='small' />
      </li>
      <li>
        <IconButton variant='text' onClick={toggle} size='small'>
          {mode === 'dark' ? <WbSunny /> : <Bedtime />}
        </IconButton>
      </li>
      <li>
        <a target='_blank' href='https://github.com/aiszlab/musae'>
          <IconButton variant='text' size='small'>
            <Github />
          </IconButton>
        </a>
      </li>
    </ul>
  )
}

export default Toolbar
