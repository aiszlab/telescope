import { Bedtime, Github, WbSunny } from 'musae/icons'
import { Button, useTheme } from 'musae'

const Toolbar = () => {
  const { mode, toggle } = useTheme()

  return (
    <ul className='flex items-center justify-end gap-x-2'>
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
