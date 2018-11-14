---
sidebarDepth: 0
---

# Dock Layout

The `<DockLayout>` is a layout container that lets you dock child elements to the sides or the center of the layout.

<DocExampleBox codeBox="https://codesandbox.io/s/1zlq9x6954">

```html
<DockLayout :stretchLastChild="false" backgroundColor="#3c495e" class="container">
  <Label text="left" dock="left" width="40" backgroundColor="#43b883"/>
  <Label text="top" dock="top" height="40" backgroundColor="#289062"/>
  <Label text="right" dock="right" width="40" backgroundColor="#43b883"/>
  <Label text="bottom" dock="bottom" height="40" backgroundColor="#289062"/>
</DockLayout>


<DockLayout :stretchLastChild="true" backgroundColor="#3c495e" class="container">
  <Label text="left" dock="left" width="40" backgroundColor="#43b883"/>
  <Label text="top" dock="top" height="40" backgroundColor="#289062"/>
  <Label text="right" dock="right" width="40" backgroundColor="#43b883"/>
  <Label text="bottom" dock="bottom" height="40" backgroundColor="#289062"/>
  <Label text="center" backgroundColor="#1c6b48" />
</DockLayout>
```

<DockLayoutDoc />
</DocExampleBox>

## Props

| Name             | Type    | Default | Web | Mobile |
| ---------------- | ------- | ------- | --- | ------ |
| stretchLastChild | Boolean | `false` | ✔   | ✔      |

## Additional Children Props

When an element is a direct child of `<DockLayout>`, you can work with the following additional properties.

| Name | Type                             | Default | Web | Mobile |
| ---- | -------------------------------- | ------- | --- | ------ |
| dock | `top`, `right`, `bottom`, `left` |         | ✔   | ✔      |

## References

> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/layouts/dock-layout/)
> or [NativeScript Documentation](https://docs.nativescript.org/api-reference/modules/_ui_layouts_dock_layout_)
