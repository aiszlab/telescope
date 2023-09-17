import { useMemo } from 'react'
import { type MenuItemProps } from 'musae'

/**
 * @author murukal
 *
 * @description
 * 组件分类
 */
export const useComponentTree = () => {
  return useMemo<MenuItemProps[]>(() => {
    return [
      {
        key: '/components',
        label: '组件总览'
      },
      {
        key: '/components/layout-group',
        label: '布局',
        children: [
          {
            key: '/components/divider',
            label: 'Divider 分割线'
          }
        ]
      },
      {
        key: '/components/input-group',
        label: '输入',
        children: [
          {
            key: '/components/button',
            label: 'Button 按钮'
          },
          {
            key: '/components/input',
            label: 'Input 输入框'
          }
        ]
      }
    ]
  }, [])
}
