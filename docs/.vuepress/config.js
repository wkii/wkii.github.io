module.exports = {
  /**
   * 如果使用github 个人站点或组织站点，访问域名为 https://<username>.github.io 或 https://<organization>.github.io 时，base 设置为 /
   * 如果使用github 项目站点，访问域名为 https://<username>.github.io/<repo>/ 时，base 设置为项目仓库名
   * 如果使用github 项目站点，但是绑定了域名时， base 设置为 /
   * 参考：https://help.github.com/cn/github/working-with-github-pages/creating-a-github-pages-site
   */
  base: "/", 
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      title: 'Wkii Blog',
      description: 'Happiness is Grasp now!'
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/img/favicon.ico' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/img/favicon.ico' }],
    ['meta', { name: 'msapplication-TileColor', content: "#000000" }],
    
    // 移动端优化
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]

  ],
  markdown: {
    lineNumbers: true, // 代码块显示行号
  },
  //permalink: "/:year:month:day-:slug.html",
  theme: 'reco',
  // 主题配置
  themeConfig: {
    // 所有页面全部开启自动生成侧边栏
    sidebar: 'auto',
    // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    sidebarDepth: 2,
    nav: [
      { text: 'Home', link: '/', icon: 'reco-home'},
      // reco主题时间线
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
      // rss
      { text: 'RSS', link: 'https://www.wkii.net/rss.xml', target: '_self', rel: '', icon: 'reco-rss'},
      // 内部链接 以docs为根目录  
      { text: 'Github', link: 'https://github.com/wkii', icon: 'reco-github' },
      { text: 'Mirrors', ariaLabel: 'Site mirrors', icon: 'reco-menu',
        items: [
          { text: 'wkii.net', link: 'https://www.wkii.net', icon: 'reco-home', target: '_self' },
          { text: 'github.io', link: 'https://wkii.github.io', icon: 'reco-github', target: '_self' },
        ]
      }
    ],
    displayAllHeaders: false, // 默认值：false

    // ################### theme-reco 模板配置 ########################
    type: 'blog',
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置, 默认2
        text: 'Category' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置, 默认3
        text: 'Tag' // 默认 “标签”
      }
    },

    // Optional options for generating "Edit this page" link

    repo: 'wkii/wkii.github.io',
    // if your docs are in a different repo from your main project:
    //docsRepo: '',
    // if your docs are not at the root of the repo:
    docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'develop',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    // editLinkText: 'Help us improve this page!'
    // 文档更新时间：每个文件git最后提交的时间
    lastUpdated: '最后列新',
    editLinkText: '在 GitHub 上编辑此页',

    huawei: false,
    startYear: '2012',
    noFoundPageByTencent: false,
    author: 'Wkii',
    mode: 'light', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
    modePicker: false // 默认 true，false 不显示模式调节按钮，true 则显示

  },
  plugins: [
    // code-copy 插件安装后，每段代码行都看起来像多了一行，不好看。而且有较宽的行触发左右滑动时，复制按钮也跟着滑动，滑稽
    //'code-copy',
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['@vuepress/medium-zoom', true],
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-286583-7' // UA-286583-7
      }
    ],
    [
      '@vuepress/last-updated', 
      {
        transformer: (timestamp, lang) => {
          //return (new Date(timestamp)).toUTCString() 或者用下面这段
          // 不要忘了安装 moment
          const moment = require('moment')
          moment.locale(lang)
          return moment(timestamp).toString()
        }
      }
    ],
    [
      'feed',
      {
        canonical_base: 'https://www.wkii.net',
        feeds: {
          rss2: { enable: true },
          atom1: { enable: false },
          json1: { enable: false },
        },
        posts_directories: [
          '/Docker',
          '/Git',
          '/Java',
          '/Kubernetes',
          '/Life',
          '/Nginx',
          '/Office',
          '/PHP',
          '/Tech',
          '/DevOps'
        ]
      }
    ],
    [
      'sitemap', 
      {
        hostname: 'https://www.wkii.net',
        dateFormatter: time => {
          return new Date(time).toISOString()
        }
      }
    ],
  ]
}