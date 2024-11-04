import type { NavigationItem } from 'musae/types/bench'

export const NAVIGATIONS: NavigationItem[] = [
  {
    path: '/',
    label: '首页'
  },
  {
    path: '/components',
    label: '组件',
    children: [
      {
        path: '/components',
        label: 'Getting Started'
      },
      {
        path: '/components/tailwindcss',
        label: '与 tailwindcss 结合使用'
      },
      {
        path: '/components/common-group',
        label: '通用',
        children: [
          {
            path: '/components/icon',
            label: 'Icon 图标'
          }
        ]
      },
      {
        path: '/components/layout-group',
        label: '布局',
        children: [
          {
            path: '/components/grid',
            label: 'Grid 布局'
          },
          {
            path: '/components/divider',
            label: 'Divider 分割线'
          },
          {
            path: '/components/waterfall',
            label: 'Waterfall 瀑布流'
          },
          {
            path: '/components/space',
            label: 'Space 间距容器'
          },
          {
            path: '/components/collapse',
            label: 'Collapse 折叠面板'
          }
        ]
      },
      {
        path: '/components/navigation-group',
        label: '导航',
        children: [
          {
            path: '/components/menu',
            label: 'Menu 菜单'
          },
          {
            path: '/components/breadcrumb',
            label: 'Breadcrumb 面包屑'
          },
          {
            path: '/components/tabs',
            label: 'Tabs 标签页'
          },
          {
            path: '/components/pagination',
            label: 'Pagination 分页'
          },
          {
            path: '/components/steps',
            label: 'Steps 步骤条'
          },
          {
            path: '/components/visually-hidden',
            label: 'VisuallyHidden 可见性隐藏'
          }
        ]
      },
      {
        path: '/components/input-group',
        label: '输入',
        children: [
          {
            path: '/components/button',
            label: 'Button 按钮'
          },
          {
            path: '/components/countdown',
            label: 'Countdown 倒计数'
          },
          {
            path: '/components/input',
            label: 'Input 输入框'
          },
          {
            path: '/components/password-input',
            label: 'PasswordInput 密码输入框'
          },
          {
            path: '/components/number-input',
            label: 'NumberInput 数字输入框'
          },
          {
            path: '/components/textarea',
            label: 'Textarea 多行输入框'
          },
          {
            path: '/components/otp-input',
            label: 'OtpInput OTP输入框'
          },
          {
            path: '/components/checkbox',
            label: 'Checkbox 复选框'
          },
          {
            path: '/components/radio',
            label: 'Radio 单选框'
          },
          {
            path: '/components/select',
            label: 'Select 下拉框'
          },
          {
            path: '/components/cascader',
            label: 'Cascader 级联选择'
          },
          {
            path: '/components/switch',
            label: 'Switch 开关'
          },
          {
            path: '/components/rate',
            label: 'Rate 评分'
          },
          {
            path: '/components/form',
            label: 'Form 表单'
          },
          {
            path: '/components/date-picker',
            label: 'DatePicker 日期选择器'
          },
          {
            path: '/components/date-range-picker',
            label: 'DateRangePicker 日期区间选择器'
          },
          {
            path: '/components/time-picker',
            label: 'TimePicker 时间选择器'
          },
          {
            path: '/components/upload',
            label: 'Upload 上传'
          },
          {
            path: '/components/transfer',
            label: 'Transfer 穿梭框'
          }
        ]
      },
      {
        path: '/components/data-display',
        label: '数据展示',
        children: [
          {
            path: '/components/skeleton',
            label: 'Skeleton 骨架屏'
          },
          {
            path: '/components/avatar',
            label: 'Avatar 头像'
          },
          {
            path: '/components/image',
            label: 'Image 图片'
          },
          {
            path: '/components/tag',
            label: 'Tag 标签'
          },
          {
            path: '/components/badge',
            label: 'Badge 徽标'
          },
          {
            path: '/components/loading',
            label: 'Loading 加载中'
          },
          {
            path: '/components/message',
            label: 'Message 全局提示'
          },
          {
            path: '/components/notification',
            label: 'Notification 通知消息框'
          },
          {
            path: '/components/tooltip',
            label: 'Tooltip 消息提示'
          },
          {
            path: '/components/popover',
            label: 'Popover 气泡卡片'
          },
          {
            path: '/components/calendar',
            label: 'Calendar 日历'
          },
          {
            path: '/components/clock',
            label: 'Clock 时钟'
          },
          {
            path: '/components/tree',
            label: 'Tree 树形控件'
          },
          {
            path: '/components/table',
            label: 'Table 表格'
          },
          {
            path: '/components/timeline',
            label: 'Timeline 时间轴'
          },
          {
            path: '/components/highlight',
            label: 'Highlight 高亮'
          },
          {
            path: '/components/quote',
            label: 'Quote 引用'
          }
        ]
      },
      {
        path: '/components/feedback',
        label: '反馈',
        children: [
          {
            path: '/components/dialog',
            label: 'Dialog 弹窗'
          },
          {
            path: '/components/drawer',
            label: 'Drawer 抽屉'
          },
          {
            path: '/components/progress',
            label: 'Progress 进度条'
          },
          {
            path: '/components/popconfirm',
            label: 'Popconfirm 气泡确认框'
          },
          {
            path: '/components/tour',
            label: 'Tour 漫游式引导'
          },
          {
            path: '/components/watermark',
            label: 'Watermark 水印'
          }
        ]
      },
      {
        path: '/components/compound',
        label: '复合型',
        children: [
          {
            path: '/components/compound-getting-started',
            label: 'Getting Started'
          },
          {
            path: '/components/bench',
            label: 'Bench 工作台'
          },
          {
            path: '/components/rich-text-editor',
            label: 'RichTextEditor 富文本编辑器'
          },
          {
            path: '/components/chat',
            label: 'Chat 对话面板'
          }
        ]
      }
    ]
  },
  {
    path: '/hooks',
    label: 'Hooks',
    children: [
      {
        path: '/hooks',
        label: 'Getting Started'
      },
      {
        path: '/utils/labs',
        label: 'API',
        children: [
          {
            path: '/utils/using',
            label: 'using 全局状态管理'
          }
        ]
      },
      {
        path: '/hooks/life-cycle',
        label: 'LifeCycle',
        children: [
          {
            path: '/hooks/use-mount',
            label: 'useMount'
          },
          {
            path: '/hooks/use-mounted',
            label: 'useMounted'
          },
          {
            path: '/hooks/use-unmount',
            label: 'useUnmount'
          },
          {
            path: '/hooks/use-update-effect',
            label: 'useUpdateEffect'
          }
        ]
      },
      {
        path: '/hooks/interactions',
        label: 'Interactions',
        children: [
          {
            path: '/hooks/use-hover',
            label: 'useHover'
          },
          {
            path: '/hooks/use-focus',
            label: 'useFocus'
          },
          {
            path: '/hooks/use-click-away',
            label: 'useClickAway'
          },
          {
            path: '/hooks/use-scroll-locker',
            label: 'useScrollLocker'
          }
        ]
      },
      {
        path: '/hooks/state',
        label: 'State',
        children: [
          {
            path: '/hooks/use-controlled-state',
            label: 'useControlledState'
          },
          {
            path: '/hooks/use-counter',
            label: 'useCounter'
          },
          {
            path: '/hooks/use-boolean',
            label: 'useBoolean'
          },
          {
            path: '/hooks/use-default',
            label: 'useDefault'
          }
        ]
      },
      {
        path: '/hooks/util',
        label: 'Util',
        children: [
          {
            path: '/hooks/use-debounce-callback',
            label: 'useDebounceCallback'
          },
          {
            path: '/hooks/use-throttle-callback',
            label: 'useThrottleCallback'
          },
          {
            path: '/hooks/use-event',
            label: 'useEvent'
          },
          {
            path: '/hooks/use-force-update',
            label: 'useForceUpdate'
          },
          {
            path: '/hooks/use-composed-ref',
            label: 'useComposedRef'
          },
          {
            path: '/hooks/use-identity',
            label: 'useIdentity'
          }
        ]
      }
    ]
  },
  {
    path: '/utils',
    label: '工具',
    children: [
      {
        path: '/utils/number',
        label: '数字',
        children: [
          {
            path: '/utils/clamp',
            label: 'clamp 取中间值'
          }
        ]
      },
      {
        path: '/utils/function',
        label: '函数',
        children: [
          {
            path: '/utils/chain',
            label: 'chain 连续调用'
          }
        ]
      },
      {
        path: '/utils/array',
        label: '数组',
        children: [
          {
            path: '/utils/first',
            label: 'first 第一个元素'
          },
          {
            path: '/utils/last',
            label: 'last 最后一个元素'
          },
          {
            path: '/utils/unique',
            label: 'unique 去重元素'
          },
          {
            path: '/utils/unique-by',
            label: 'uniqueBy 按条件去重元素'
          },
          {
            path: '/utils/range',
            label: 'range 创建连续数组'
          }
        ]
      },
      {
        path: '/utils/class-name',
        label: '类名处理',
        children: [
          {
            path: '/utils/stringify',
            label: 'stringify 合并类名'
          }
        ]
      }
    ]
  },
  {
    path: '/about-us',
    label: 'About us'
  }
]
