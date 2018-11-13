---
sidebarDepth: 0
---

# Switch

> This is an overview of the most common usage of Switch.
> "Switcher" is being used in the implementation thus, Switch word is a reserved one for VueJs.

<DocExampleBox codeBox="https://codesandbox.io/s/p7wyk8xl3x">
```html
    <Switcher checked="true" />
```
<SwitchDoc />
</DocExampleBox>

`Switch` provides two-way data binding using v-model.

```html
<Switcher v-model="itemEnabled" />
```

#### Props

| Name    | Type    | Default | Web | Mobile |
| ------- | ------- | ------- | --- | ------ |
| checked | Boolean | `false` | ✔   | ✔      |

#### Events

| Name          | Web | Mobile |
| ------------- | --- | ------ |
| checkedChange | ✔   | ✔      |

#### References

> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/components/switch/)
> or [NativeScript Documentation](https://docs.nativescript.org/api-reference/classes/_ui_switch_.switch)