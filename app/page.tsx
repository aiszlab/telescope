'use client'

import { Button } from 'musae'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'
import dayjs from 'dayjs'

const App = () => {
  const router = useRouter()

  const start = useCallback(() => {
    router.push('/components')
  }, [router])

  return (
    <>
      <main className='flex-1 flex flex-col items-center content-center flex-nowrap'>
        <h1 className='text-7xl p-20 font-bold'>
          🎉&nbsp;
          <span className='whitespace-nowrap bg-clip-text text-transparent from-green-700 to-cyan-200 bg-gradient-to-br '>
            musae-ui&nbsp;2.0&nbsp;is&nbsp;out!️
          </span>
          &nbsp;🥳
        </h1>

        <div className='bg-slate-600 w-full py-20'>
          <h1 className='max-w-7xl text-6xl text-white px-20 font-bold'>
            <span>
              Build&nbsp;<b className='text-green-600'>optimized</b>&nbsp;websites&nbsp;
              <b className='text-green-600'>quickly</b>, focus on your&nbsp;<b className='text-green-600'>content</b>
            </span>
          </h1>

          <div className='mt-6 px-20 py-6 flex items-center'>
            <Button onClick={start}>Get Started</Button>
            <Button onClick={start} className='ml-6'>
              Try a Demo
            </Button>
          </div>
        </div>
      </main>

      <footer className='bg-slate-800 p-10 flex flex-col items-center'>
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
        <p>Copyright © {dayjs().get('y')} fantufantu</p>
      </footer>
    </>
  )
}

export default App
