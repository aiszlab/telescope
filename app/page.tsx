'use client'

import { Button, useTheme } from 'musae'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'
import dayjs from 'dayjs'

const CURRENT_AT = dayjs()

const App = () => {
  const router = useRouter()

  const start = useCallback(() => {
    router.push('/components')
  }, [router])

  const theme = useTheme()

  return (
    <>
      <main className='flex-1 flex flex-col items-center content-center flex-nowrap'>
        <div className='p-20'>
          <h1 className='text-5xl font-bold'>
            🎉
            <span className='bg-clip-text text-transparent from-green-700 to-cyan-200 bg-gradient-to-br '>
              musae is out!️
            </span>
            🥳
          </h1>
        </div>

        <div
          className='bg-slate-600 w-full py-20 flex-1'
          style={{
            backgroundColor: theme.colors['secondary-container']
          }}
        >
          <h1 className='text-4xl px-20 font-bold' style={{ color: theme.colors['on-secondary-container'] }}>
            <span>
              Build <b className='text-green-600'>optimized</b> websites <b className='text-green-600'>quickly</b>,
              focus on your <b className='text-green-600'>content</b>
            </span>
          </h1>

          <div className='mt-6 px-20 py-6 flex items-center gap-x-6'>
            <Button onClick={start}>Get Started</Button>
            <Button onClick={start}>Try a Demo</Button>
          </div>
        </div>
      </main>

      <footer className='bg-slate-800 text-white p-10 flex flex-col items-center'>
        <div className='flex w-full mb-6'>
          <div className='flex-1 px-2'>
            <h6 className='font-bold text-lg mb-5'>Learn</h6>
            <ul>
              <li>Introduction</li>
            </ul>
          </div>
          <div className='flex-1 px-2'>
            <h6 className='font-bold text-lg mb-5'>More</h6>
            <ul>
              <li>relax</li>
            </ul>
          </div>
        </div>
        <p>Copyright © {CURRENT_AT.get('y')} fantufantu</p>
      </footer>
    </>
  )
}

export default App
