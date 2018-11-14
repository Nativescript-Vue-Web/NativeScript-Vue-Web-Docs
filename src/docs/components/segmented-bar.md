---
sidebarDepth: 0
---

# Segmented Bar

`<SegmentedBar>` is a UI bar component that displays a set of buttons for discrete selection. Can show text or images.

<DocExampleBox codeBox="https://codesandbox.io/s/8o0v3jyl9">

```html
<SegmentedBar>
  <SegmentedBarItem title="Segment 1"/>
  <SegmentedBarItem title="Segment 2"/>
  <SegmentedBarItem title="Segment 3"/>
</SegmentedBar>
```

<SegmentedBarDoc />
</DocExampleBox>

`<SegmentedBar>` provides two-way data binding using v-model.

```html
<SegmentedBar v-model="selectedIndex" :items="items" @selectedIndexChanged="changed" />
```

## Props

| Name          | Type            | Default | Web | Mobile |
| ------------- | --------------- | ------- | --- | ------ |
| items         | Array`<String>` |         | ✔   | ✔      |
| selectedIndex | Number          |         | ✔   | ✔      |

## Events

| Name                | Web | Mobile |
| ------------------- | --- | ------ |
| selectedIndexChange | ✔   | ✔      |

## References

> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/components/segmented-bar/)
> or [NativeScript Documentation](https://docs.nativescript.org/api-reference/modules/_ui_segmented_bar_)
