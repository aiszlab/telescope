import { useMemo } from 'react'
import { type MenuItem } from 'musae'

/**
 * @author murukal
 *
 * @description
 * hooks 分类
 */
export const useHooks = () => {
  return useMemo<MenuItem[]>(() => {
    return [
      {
        key: '/hooks/life-cycle',
        label: 'LifeCycle',
        children: [
          {
            key: '/hooks/use-mount',
            label: 'useMount'
          },
          {
            key: '/hooks/use-mounted',
            label: 'useMounted'
          }
        ]
      },
      {
        key: '/hooks/interactions',
        label: 'Interactions',
        children: [
          {
            key: '/hooks/use-hover',
            label: 'useHover'
          },
          {
            key: '/hooks/use-focus',
            label: 'useFocus'
          }
        ]
      },
      {
        key: '/hooks/state',
        label: 'State',
        children: [
          {
            key: '/hooks/use-controlled-state',
            label: 'useControlledState'
          },
          {
            key: '/hooks/use-counter',
            label: 'useCounter'
          },
          {
            key: '/hooks/use-boolean',
            label: 'useBoolean'
          }
        ]
      },
      {
        key: '/hooks/util',
        label: 'Util',
        children: [
          {
            key: '/hooks/use-debounce-callback',
            label: 'useDebounceCallback'
          },
          {
            key: '/hooks/use-throttle-callback',
            label: 'useThrottleCallback'
          }
        ]
      }
    ]
  }, [])
}
