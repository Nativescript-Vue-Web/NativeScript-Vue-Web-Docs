---
sidebarDepth: 0
---
# Progress

This is an overview of the most common usage of Progress.

<DocExampleBox codeBox="https://codesandbox.io/s/zkm7o31o6x">

```html
  <Progress :value="currentProgress" @valueChange="progressChange" :maxValue="maxValueProgress" />

```

<ProgressDoc />
</DocExampleBox>

## Props

| Name     | Type   | Default | Web | Mobile |
| -------- | ------ | ------- | --- | ------ |
| value    | Number | 0       | ✔   | ✔      |
| maxValue | Number | 100     | ✔   | ✔      |

## Events

| Name        | Web | Mobile |
| ----------- | --- | ------ |
| valueChange | ✔   | ✔      |


## References

> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/components/progress/)
> or [NativeScript Documentation](https://docs.nativescript.org/api-reference/classes/_ui_progress_.progress)
