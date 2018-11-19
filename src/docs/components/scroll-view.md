---
sidebarDepth: 0
---

# ScrollView

This is an overview of the most common usage of `<ScrollView>`.

<DocExampleBox codeBox="https://codesandbox.io/s/y3jzz2v5mv?module=%2Fsrc%2FApp.vue">

```html
<ScrollView orientation="horizontal">
  <StackLayout orientation="horizontal">
    <Label text="this" />
    <Label text="text" />
    <Label text="scrolls" />
    <Label text="horizontally" />
    <Label text="if necessary" />
  </StackLayout>
</ScrollView>

```

```scss
.scroll-view {
  &__horizontal {
    width: 150px;
  }
  &__vertical {
    height: 100px;
    width: 150px;
    margin-top: 15px;
  }
}
```

<ScrollViewDoc />
</DocExampleBox>

## Props

| Name                      | Type                     | Default    | Web | Mobile |
| ------------------------- | ------------------------ | ---------- | --- | ------ |
| orientation               | `horizontal`, `vertical` | `vertical` | ✔   | ✔      |
| scrollBarIndicatorVisible | Boolean                  | `true`     | ✔   | ✘      |

## Events

| Name   | Web | Mobile |
| ------ | --- | ------ |
| scroll | ✔   | ✔      |

## References

> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/components/scroll-view/)
> or [NativeScript Documentation](https://docs.nativescript.org/api-reference/classes/_ui_scroll_view_.scrollview)
