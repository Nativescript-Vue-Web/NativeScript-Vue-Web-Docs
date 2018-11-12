module.exports = {
  title: "Nativescript Vue Web",
  description: "One Code Many Platforms",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/docs/" },
      { text: 'GitHub', link: 'https://github.com/Nativescript-Vue-Web/Nativescript-Vue-Web' },
    ],
    sidebar: {
      "/docs/": [
        "",
        {
          title: "Getting Started",
          collapsable: false,
          children: [
            "getting-started/installation"
          ]
        },
        {
          title: "Utilities",
          collapsable: false,
          children: []
        },
        {
          title: "Layouts",
          collapsable: false,
          children: [
            "layouts/absolute-layout",
            "layouts/dock-layout",
            "layouts/stack-layout",
            "layouts/wrap-layout",
          ]
        },
        {
          title: "Action Bars",
          collapsable: false,
          children: [
            "action-bars/navigation-button",
          ]
        },
        {
          title: "Components",
          collapsable: false,
          children: []
        },
        {
          title: "Dialogs",
          collapsable: false,
          children: []
        }
      ]
    }
  },
  dest: "./dist",
  serviceWorker: true
};
