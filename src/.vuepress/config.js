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
            "layouts/flexbox-layout",
            "layouts/grid-layout",
            "layouts/stack-layout",
            "layouts/wrap-layout"
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
            "components/activity-indicator",
            "components/button",
            "components/html-view",
            "components/image",
            "components/label",
            "components/list-picker",
            "components/progress",
            "components/scroll-view",
            "components/search-bar",
            "components/segmented-bar",
            "components/slider",
            "components/switch",
            "components/tab-view",
            "components/text-field",
            "components/text-view",
            "components/time-picker",
            "components/html-view",
            "components/web-view",
            "components/frame"
          ]
        },
        {
          title: "Dialogs",
          collapsable: false,
          children: [
            "dialogs/action-dialog",
            "dialogs/confirm-dialog",
            "dialogs/login-dialog",
            "dialogs/prompt-dialog"
          ]
        }
      ]
    }
  },
  dest: "./dist",
  serviceWorker: true
};
