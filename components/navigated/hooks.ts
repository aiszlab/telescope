import { useMemo } from 'react'

export type NavigationType = 'hook' | 'component'

/**
 * @description
 * menu items
 */
export const useNavigationItems = ({ type }: { type: NavigationType }) => {
  return useMemo(() => {
    if (type === 'component') {
      return [
        {
          key: '/components',
          label: 'Getting Started'
        },
        {
          key: '/components/common-group',
          label: '通用',
          children: [
            {
              key: '/components/icon',
              label: 'Icon 图标'
            }
          ]
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
            },
            {
              key: '/components/waterfall',
              label: 'Waterfall 瀑布流'
            },
            {
              key: '/components/space',
              label: 'Space 间距容器'
            },
            {
              key: '/components/collapse',
              label: 'Collapse 折叠面板'
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
            },
            {
              key: '/components/pagination',
              label: 'Pagination 分页'
            },
            {
              key: '/components/steps',
              label: 'Steps 步骤条'
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
              key: '/components/countable',
              label: 'Countable 可计数'
            },
            {
              key: '/components/input',
              label: 'Input 输入框'
            },
            {
              key: '/components/otp-input',
              label: 'OtpInput OTP 输入框'
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
              key: '/components/rate',
              label: 'Rate 评分'
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
            },
            {
              key: '/components/upload',
              label: 'Upload 上传'
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
              key: '/components/image',
              label: 'Image 图片'
            },
            {
              key: '/components/tag',
              label: 'Tag 标签'
            },
            {
              key: '/components/loading',
              label: 'Loading 加载中'
            },
            {
              key: '/components/message',
              label: 'Message 全局提示'
            },
            {
              key: '/components/notification',
              label: 'Notification 通知消息框'
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
            },
            {
              key: '/components/timeline',
              label: 'Timeline 时间轴'
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
            },
            {
              key: '/components/progress',
              label: 'Progress 进度条'
            },
            {
              key: '/components/popover',
              label: 'Popover 气泡卡片'
            },
            {
              key: '/components/tooltip',
              label: 'Tooltip 消息提示'
            },
            {
              key: '/components/tour',
              label: 'Tour 漫游式引导'
            },
            {
              key: '/components/watermark',
              label: 'Watermark 水印'
            }
          ]
        }
      ]
    }

    if (type === 'hook') {
      return [
        {
          key: '/hooks',
          label: 'Getting Started'
        },
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
            },
            {
              key: '/hooks/use-update-effect',
              label: 'useUpdateEffect'
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
            },
            {
              key: '/hooks/use-default',
              label: 'useDefault'
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
            },
            {
              key: '/hooks/use-event',
              label: 'useEvent'
            },
            {
              key: '/hooks/use-force-update',
              label: 'useForceUpdate'
            },
            {
              key: '/hooks/use-refs',
              label: 'useRefs'
            }
          ]
        }
      ]
    }

    return []
  }, [type])
}
