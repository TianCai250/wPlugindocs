export default {
  title: "w-plugin", //站点标题
  description: "一个插件项目库", //mate标签description，多用于搜索引擎抓取摘要
  themeConfig: {
    siteTitle: "WPlugin",
    logo: "/logo.png",
    // nav菜单
    nav: [
      { text: "插件", link: "/projects/chromePlugins/GotoLink" },
      { text: "github", link: "https://github.com/TianCai250" },
    //   {
    //     text: "Drop Menu",
    //     items: [
    //       {
    //         items: [
    //           { text: "GotoLink", link: "/projects/chromePlugins/GotoLink" },
    //           { text: "EditWeb", link: "/projects/chromePlugins/EditWeb" },
    //           {
    //             text: "SimpleCsdn",
    //             link: "/projects/chromePlugins/SimpleCsdn",
    //           },
    //         ],
    //       },
    //       {
    //         items: [
    //           {
    //             text: "Element-UI-Snippets",
    //             link: "/projects/vscodePlugins/element-ui-snippets",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    ],
    // 图标链接
    socialLinks: [
      { icon: "github", link: "https://github.com/TianCai250" },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>',
        },
        link: "...",
      },
    ],
    // 左侧边栏
    sidebar: {
      "/projects/": [
        {
          text: "谷歌浏览器插件",
          collapsible: true,
          collapsed: false,
          items: [
            {
              text: "GotoLink",
              link: "/projects/chromePlugins/GotoLink",
            },
            { text: "EditWeb", link: "/projects/chromePlugins/EditWeb" },
            { text: "SimpleCsdn", link: "/projects/chromePlugins/SimpleCsdn" },
          ],
        },
        {
          text: "vscode插件",
          collapsible: true,
          collapsed: false,
          items: [
            {
              text: "Element-UI-Snippets",
              link: "/projects/vscodePlugins/element-ui-snippets",
            },
          ],
        },
      ],
    },
  },
};
