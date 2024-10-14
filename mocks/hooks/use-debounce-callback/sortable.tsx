'use client'
import { useDebounceCallback } from '@aiszlab/relax'
import { Input } from 'musae'
import { useRef, useState } from 'react'

const wait = (duration: number) => new Promise((resolve) => setTimeout(resolve, duration))

const Sortable = () => {
  const unorderedCount = useRef(0)
  const [unorderedSearched, setUnorderedSearched] = useState<string>('')
  const orderedCount = useRef(0)
  const [orderedSearched, setOrderedSearched] = useState<string>('')

  const { next: unorderedSearch } = useDebounceCallback(async () => {
    unorderedCount.current = unorderedCount.current + 1
    const _count = unorderedCount.current
    // 第一次请求 10s 后返回，后续请求更快的返回
    await wait(_count === 1 ? 10000 : 1000)
    setUnorderedSearched(`第${_count.toString()}搜索结果有效`)
  }, 1000)

  const { next: orderedSearch } = useDebounceCallback(
    {
      callback: async (count: number) => {
        setOrderedSearched(`第${count.toString()}搜索结果有效`)
      },
      pipe: async () => {
        orderedCount.current = orderedCount.current + 1
        const _count = orderedCount.current
        // 第一次请求 10s 后返回，后续请求更快的返回
        await wait(_count === 1 ? 10000 : 1000)
        return _count
      }
    },
    1000
  )

  return (
    <div className='flex flex-col gap-y-1'>
      <h4>无序的防抖</h4>
      <Input onChange={unorderedSearch} placeholder='尝试搜索' />
      {!!unorderedSearched && <span>{unorderedSearched}</span>}

      <h4 className='mt-2'>有序的防抖</h4>
      <Input onChange={orderedSearch} placeholder='尝试搜索' />
      {!!orderedSearched && <span>{orderedSearched}</span>}
    </div>
  )
}

export default Sortable
