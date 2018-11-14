---
sidebarDepth: 0
---
# List Picker

This is an overview of the most common usage of `<ListPicker>`.

<DocExampleBox codeBox="https://codesandbox.io/s/l9l6o34mvm">

```html
<ListPicker v-model="selectedIndex" :items="listOfItems" @selectedIndexChange="selectedIndexChanged" />
```

```js
  selectedIndexChanged(event) {
      console.log("index changed", this.selectedIndex);
    }
```

```scss
.listpicker {
width: 150px;
}
```

<ListPickerDoc />
</DocExampleBox>

`ListPicker` is a UI component that lets the user select a value from a pre-configured list.


## Props

| Name          | Type   | Default | Web | Mobile |
| ------------- | ------ | ------- | --- | ------ |
| items         | Array  |         | ✔   | ✔      |
| selectedIndex | Number |         | ✔   | ✔      |

## Events

| Name                | Web | Mobile |
| ------------------- | --- | ------ |
| selectedIndexChange | ✔   | ✔      |


## References

> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/components/list-picker/)
> or [NativeScript Documentation](https://docs.nativescript.org/api-reference/classes/_ui_list_picker_.listpicker)
