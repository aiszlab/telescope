import { useMemo } from 'react'
import { type MenuItem } from 'musae'

/**
 * @author murukal
 *
 * @description
 * 组件分类
 */
export const useComponentTree = () => {
  return useMemo<MenuItem[]>(() => {
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
            key: '/components/grid',
            label: 'Grid 布局'
          },
          {
            key: '/components/divider',
            label: 'Divider 分割线'
          }
        ]
      },
      {
        key: '/components/navigation-group',
        label: '导航',
        children: [
          {
            key: '/components/menu',
            label: 'Menu 菜单'
          },
          {
            key: '/components/breadcrumb',
            label: 'Breadcrumb 面包屑'
          },
          {
            key: '/components/tabs',
            label: 'Tabs 标签页'
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
          },
          {
            key: '/components/checkbox',
            label: 'Checkbox 复选框'
          },
          {
            key: '/components/radio',
            label: 'Radio 单选框'
          },
          {
            key: '/components/select',
            label: 'Select 下拉框'
          },
          {
            key: '/components/cascader',
            label: 'Cascader 级联选择'
          },
          {
            key: '/components/switch',
            label: 'Switch 开关'
          },
          {
            key: '/components/form',
            label: 'Form 表单'
          },
          {
            key: '/components/date-picker',
            label: 'DatePicker 日期选择器'
          },
          {
            key: '/components/date-range-picker',
            label: 'DateRangePicker 日期区间选择器'
          },
          {
            key: '/components/time-picker',
            label: 'TimePicker 时间选择器'
          }
        ]
      },
      {
        key: '/components/data-display',
        label: '数据展示',
        children: [
          {
            key: '/components/avatar',
            label: 'Avatar 头像'
          },
          {
            key: '/components/loading',
            label: 'Loading 加载中'
          },
          {
            key: '/components/message',
            label: 'Message 消息'
          },
          {
            key: '/components/calendar',
            label: 'Calendar 日历'
          },
          {
            key: '/components/clock',
            label: 'Clock 时钟'
          },
          {
            key: '/components/tree',
            label: 'Tree 树形控件'
          },
          {
            key: '/components/table',
            label: 'Table 表格'
          }
        ]
      },
      {
        key: '/components/feedback',
        label: '反馈',
        children: [
          {
            key: '/components/dialog',
            label: 'Dialog 弹窗'
          },
          {
            key: '/components/drawer',
            label: 'Drawer 抽屉'
          }
        ]
      }
    ]
  }, [])
}
