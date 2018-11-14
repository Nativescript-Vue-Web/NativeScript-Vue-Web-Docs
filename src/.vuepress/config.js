module.exports = {
  title: "Nativescript Vue Web",
  description: "One Code Many Platforms",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/docs/" },
      {
        text: "GitHub",
        link: "https://github.com/Nativescript-Vue-Web/Nativescript-Vue-Web"
      }
    ],
    sidebar: {
      "/docs/": [
        "",
        {
          title: "Getting Started",
          collapsable: false,
          children: ["getting-started/installation"]
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
            "layouts/flexbox-layout",
            "layouts/wrap-layout",
            "layouts/grid-layout"
          ]
        },
        {
          title: "Action Bars",
          collapsable: false,
          children: ["action-bars/navigation-button"]
        },
        {
          title: "Components",
          collapsable: false,
          children: [
            "components/search-bar",
            "components/segmented-bar",
            "components/slider",
            "components/switch",
            "components/tab-view",
            "components/activity-indicator",
            "components/text-field",
            "components/text-view",
            "components/button",
            "components/time-picker",
            "components/html-view",
            "components/web-view",
            "components/image",
            "components/label",
            "components/progress",
            "components/scroll-view",
            "components/list-picker",
          ]
        },
        {
          title: "Dialogs",
          collapsable: false,
          children: [
            "dialogs/confirm-dialog",
            "dialogs/login-dialog",
            "dialogs/prompt-dialog",
          ]
        }
      ]
    }
  },
  dest: "./dist",
  serviceWorker: true
};
