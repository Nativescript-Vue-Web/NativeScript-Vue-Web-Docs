---
sidebarDepth: 0
---
# Navigation Button

The `<NavigationButton>` component is a NativeScript abstraction for the Android navigation button, the iOS and web back button.

<DocExampleBox codeBox="https://codesandbox.io/s/9y51w9oj54">

```html
<<ActionBar title="My App">
  <NavigationButton text="Go back" @tap="goBack" webIcon="fa fa-arrow-left" />
</ActionBar>
```

<NavigationButtonDoc />
</DocExampleBox>

#### Props

| Name    | Type   | Default | Web | Mobile |
| ------- | ------ | ------- | --- | ------ |
| text    | String |         | ✔   | ✔      |
| webIcon | String |         | ✔   | ✘      |

#### Events

| Name | Web | Mobile |
| ---- | --- | ------ |
| tap  | ✔   | ✔      |

> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/action-bar/navigation-button/)
> or [NativeScript Documentation](https://docs.nativescript.org/api-reference/classes/_ui_action_bar_.navigationbutton)
