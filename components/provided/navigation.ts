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
          },
          {
            path: '/components/icon-button',
            label: 'IconButton 图标按钮'
          },
          {
            path: '/components/fab',
            label: 'Fab 浮动操作按钮'
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
            path: '/components/layout',
            label: 'Layout 布局'
          },
          {
            path: '/components/split-panel',
            label: 'SplitPanel 分割面板'
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
          },
          {
            path: '/components/search',
            label: 'Search 搜索'
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
          },
          {
            path: '/components/card',
            label: 'Card 卡片'
          },
          {
            path: '/components/empty',
            label: 'Empty 空状态'
          },
          {
            path: '/components/ellipsis',
            label: 'Ellipsis 文本省略'
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
          },
          {
            path: '/components/action-sheet',
            label: 'ActionSheet 操作面板'
          },
          {
            path: '/components/bottom-sheet',
            label: 'BottomSheet 底部面板'
          }
        ]
      },
      {
        path: '/components/config-group',
        label: '配置',
        children: [
          {
            path: '/components/theme',
            label: 'ThemeProvider 主题'
          },
          {
            path: '/components/config',
            label: 'ConfigProvider 全局配置'
          },
          {
            path: '/components/i18n-button',
            label: 'I18nButton 国际化切换'
          },
          {
            path: '/components/session-storage',
            label: 'SessionStorage 会话存储'
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
          },
          {
            path: '/components/markdown',
            label: 'Markdown Markdown文档'
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
          },
          {
            path: '/hooks/use-is-mounted',
            label: 'useIsMounted'
          },
          {
            path: '/hooks/use-async-effect',
            label: 'useAsyncEffect'
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
          },
          {
            path: '/hooks/use-drag',
            label: 'useDrag'
          },
          {
            path: '/hooks/use-draggable',
            label: 'useDraggable'
          },
          {
            path: '/hooks/use-scroll',
            label: 'useScroll'
          },
          {
            path: '/hooks/use-scrollable',
            label: 'useScrollable'
          },
          {
            path: '/hooks/use-infinite-scroll',
            label: 'useInfiniteScroll'
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
          },
          {
            path: '/hooks/use-toggleable',
            label: 'useToggleable'
          },
          {
            path: '/hooks/use-reactive',
            label: 'useReactive'
          },
          {
            path: '/hooks/use-local-storage-state',
            label: 'useLocalStorageState'
          },
          {
            path: '/hooks/use-session-storage-state',
            label: 'useSessionStorageState'
          }
        ]
      },
      {
        path: '/hooks/network',
        label: 'Network',
        children: [
          {
            path: '/hooks/use-request',
            label: 'useRequest'
          },
          {
            path: '/hooks/use-event-source',
            label: 'useEventSource'
          }
        ]
      },
      {
        path: '/hooks/sensor',
        label: 'Sensor',
        children: [
          {
            path: '/hooks/use-element-size',
            label: 'useElementSize'
          },
          {
            path: '/hooks/use-screen-size',
            label: 'useScreenSize'
          },
          {
            path: '/hooks/use-device-pixel-ratio',
            label: 'useDevicePixelRatio'
          },
          {
            path: '/hooks/use-media-query',
            label: 'useMediaQuery'
          },
          {
            path: '/hooks/use-image-loader',
            label: 'useImageLoader'
          },
          {
            path: '/hooks/use-resize',
            label: 'useResize'
          },
          {
            path: '/hooks/use-mutate-observer',
            label: 'useMutateObserver'
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
          },
          {
            path: '/hooks/use-timeout',
            label: 'useTimeout'
          },
          {
            path: '/hooks/use-timer',
            label: 'useTimer'
          },
          {
            path: '/hooks/use-raf',
            label: 'useRaf'
          },
          {
            path: '/hooks/use-memorized',
            label: 'useMemorized'
          },
          {
            path: '/hooks/use-lazy-ref',
            label: 'useLazyRef'
          },
          {
            path: '/hooks/use-lazy-memo',
            label: 'useLazyMemo'
          },
          {
            path: '/hooks/use-scale',
            label: 'useScale'
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
          },
          {
            path: '/utils/max',
            label: 'max 最大值'
          },
          {
            path: '/utils/min',
            label: 'min 最小值'
          },
          {
            path: '/utils/to-percentage',
            label: 'toPercentage 百分比转换'
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
          },
          {
            path: '/utils/debounce',
            label: 'debounce 防抖'
          },
          {
            path: '/utils/throttle',
            label: 'throttle 节流'
          },
          {
            path: '/utils/effect',
            label: 'effect 副作用调用'
          },
          {
            path: '/utils/to-function',
            label: 'toFunction 转换为函数'
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
          },
          {
            path: '/utils/to-array',
            label: 'toArray 转换为数组'
          },
          {
            path: '/utils/exclude',
            label: 'exclude 数组排除'
          },
          {
            path: '/utils/toggle',
            label: 'toggle 切换数组元素'
          },
          {
            path: '/utils/at',
            label: 'at 安全索引访问'
          }
        ]
      },
      {
        path: '/utils/object',
        label: '对象',
        children: [
          {
            path: '/utils/merge',
            label: 'merge 深度合并'
          },
          {
            path: '/utils/clone',
            label: 'clone 深拷贝'
          },
          {
            path: '/utils/pick',
            label: 'pick 属性筛选'
          },
          {
            path: '/utils/get',
            label: 'get 安全取值'
          },
          {
            path: '/utils/set',
            label: 'set 设置属性值'
          },
          {
            path: '/utils/try-parse',
            label: 'tryParse 安全解析'
          }
        ]
      },
      {
        path: '/utils/type-check',
        label: '类型判断',
        children: [
          {
            path: '/utils/is-refable',
            label: 'isRefable 可引用组件'
          },
          {
            path: '/utils/is-undefined',
            label: 'isUndefined 判断 undefined'
          },
          {
            path: '/utils/is-null',
            label: 'isNull 判断 null'
          },
          {
            path: '/utils/is-void',
            label: 'isVoid 判断空值'
          },
          {
            path: '/utils/is-array',
            label: 'isArray 判断数组'
          },
          {
            path: '/utils/is-number',
            label: 'isNumber 判断数字'
          },
          {
            path: '/utils/is-empty',
            label: 'isEmpty 判断空值'
          },
          {
            path: '/utils/is-dom-usable',
            label: 'isDomUsable 判断 DOM 可用'
          },
          {
            path: '/utils/is-mobile',
            label: 'isMobile 判断移动端'
          },
          {
            path: '/utils/is-overflow',
            label: 'isOverflow 判断溢出'
          },
          {
            path: '/utils/is-style-element',
            label: 'isStyleElement 判断 Style 元素'
          },
          {
            path: '/utils/is-function',
            label: 'isFunction 判断函数'
          },
          {
            path: '/utils/is-thenable',
            label: 'isThenable 判断 Thenable'
          },
          {
            path: '/utils/is-html-element',
            label: 'isHTMLElement 判断 HTML 元素'
          },
          {
            path: '/utils/is-html-input-element',
            label: 'isHTMLInputElement 判断输入元素'
          },
          {
            path: '/utils/is-object',
            label: 'isObject 判断对象'
          },
          {
            path: '/utils/is-deep-key',
            label: 'isDeepKey 判断深度键'
          },
          {
            path: '/utils/is-string',
            label: 'isString 判断字符串'
          },
          {
            path: '/utils/is-boolean',
            label: 'isBoolean 判断布尔值'
          },
          {
            path: '/utils/is-map',
            label: 'isMap 判断 Map'
          },
          {
            path: '/utils/is-set',
            label: 'isSet 判断 Set'
          }
        ]
      },
      {
        path: '/utils/string',
        label: '字符串',
        children: [
          {
            path: '/utils/replace',
            label: 'replace 替换'
          },
          {
            path: '/utils/replace-at',
            label: 'replaceAt 按索引替换'
          },
          {
            path: '/utils/tagged-template-literals',
            label: 'taggedTemplateLiterals 模板渲染'
          }
        ]
      },
      {
        path: '/utils/dom',
        label: 'DOM',
        children: [
          {
            path: '/utils/load',
            label: 'load 动态加载资源'
          },
          {
            path: '/utils/set-style',
            label: 'setStyle 设置内联样式'
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
      },
      {
        path: '/utils/other',
        label: '其他',
        children: [
          {
            path: '/utils/to-form-data',
            label: 'toFormData 转换 FormData'
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
