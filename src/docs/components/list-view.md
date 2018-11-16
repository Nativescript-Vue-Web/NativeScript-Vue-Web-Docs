---
sidebarDepth: 0
---

# ListView

This is an overview of the most common usage of ListView. For more information about the available properties, methods, or events, head over to the complete API documentation for ListView.

`<ListView>` is a UI component that shows items in a vertically scrolling list. To set how the list shows individual items, you can use the `<v-template>` component.

## Using `<ListView>` with multiple `<v-template>` blocks

The v-template component is used to define how each list item is shown on the screen.

If you need to visualize one or more list items differently than the rest, you can enclose them in additional `<v-template>` blocks and use conditions. You can have as many `<v-template>` blocks as needed within one `<ListView>`.

```html
<ListView for="item in listOfItems" @itemTap="onItemTap">
  <v-template>
    <Label :text="item.text" />
  </v-template>

  <v-template if="$odd">
    <!-- For items with an odd index, shows the label in red. -->
    <Label :text="item.text" color="red" />
  </v-template>
</ListView>
```

When you create conditions for `<v-template>`, you can use any valid JavaScript expression or any of the following helpers:

- \$index— the index of the current item
- \$even—true if the index of the current item is even
- \$odd—true if the index of the current item is odd

## An important note about v-for

`<ListView>` does not loop through list items as you would expect when using a v-for loop. Instead `<ListView>` only creates the necessary views to display the currently visible items on the screen, and reuses the views that are already off-screen when scrolled. This concept is called view recycling and is commonly used in mobile apps to improve performance.

This is important because you can't rely on event listeners attached inside the v-template. Instead, you need to use the itemTap event which contains the index of the tapped item and the actual item from the list.

```js
onItemTap(event) {
  console.log(event.index)
  console.log(event.item)
}
```

## Props

| Name           | Type         | Default | Web | Mobile |
| -------------- | ------------ | ------- | --- | ------ |
| for            | `String`     |         | ✔   | ✔      |
| items          | `Array<any>` |         | ✔   | ✔      |
| separatorColor | `Color`      |         | ✔   | ✔      |

## Events

| Name    | Web | Mobile |
| ------- | --- | ------ |
| itemTap | ✔   | ✔      |

## Methods

| Name      | Web | Mobile |
| --------- | --- | ------ |
| refresh() | ✔   | ✔      |

## References

> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/components/list-view/)
> or [NativeScript Documentation](https://docs.nativescript.org/api-reference/classes/_ui_list_listview_.listview)
