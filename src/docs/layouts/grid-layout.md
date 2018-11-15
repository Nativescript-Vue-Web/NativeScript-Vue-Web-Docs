---
sidebarDepth: 0
---

# Grid Layout

This is an overview of the most common usage of GridLayout.
`GridLayout` is a layout container that lets you arrange its child in a table-like manner.
The following example creates a simple 2-by-2 grid with fixed column widths and row heights.

<DocExampleBox codeBox="https://codesandbox.io/s/l9083jq48q">

```html
<GridLayout class="grid" width="200" height="220" columns="115, 115" rows="115, 115">
  <Label text="0,0" row="0" col="0" backgroundColor="#43b883"/>
  <Label text="0,1" row="0" col="1" backgroundColor="#1c6b48"/>
  <Label text="1,0" row="1" col="0" backgroundColor="#289062"/>
  <Label text="1,1" row="1" col="1" backgroundColor="#43b883"/>
</GridLayout>
```

```scss
.grid {
  margin-bottom: 12px;
}
```

<GridLayoutDoc />
</DocExampleBox>

The following example creates a grid with responsive design, where space is alotted proportionally to child elements.

<DocExampleBox codeBox="https://codesandbox.io/s/l9083jq48q">

```html
<GridLayout width="200" height="200" columns="*, 2*" rows="2*, 3*" backgroundColor="#3c495e">
  <Label text="0,0" row="0" col="0" backgroundColor="#43b883"/>
  <Label text="0,1" row="0" col="1" backgroundColor="#1c6b48"/>
  <Label text="1,0" row="1" col="0" backgroundColor="#289062"/>
  <Label text="1,1" row="1" col="1" backgroundColor="#43b883"/>
</GridLayout>
```

<GridLayoutResponsiveDoc />
</DocExampleBox>

The following example creates a complex grid with responsive design, mixed width and height settings, and some merged cells.

<DocExampleBox codeBox="https://codesandbox.io/s/l9083jq48q">

```html
<GridLayout width="200" height="200" columns="40, auto, *" rows="40, auto, *" backgroundColor="#3c495e">
  <Label text="0,0" row="0" col="0" backgroundColor="#43b883"/>
  <Label text="0,1" row="0" col="1" colSpan="2" backgroundColor="#1c6b48"/>
  <Label text="1,0" row="1" col="0" rowSpan="2" backgroundColor="#289062"/>
  <Label text="1,1" row="1" col="1" backgroundColor="#43b883"/>
  <Label text="1,2" row="1" col="2" backgroundColor="#289062"/>
  <Label text="2,1" row="2" col="1" backgroundColor="#1c6b48"/>
  <Label text="2,2" row="2" col="2" backgroundColor="#43b883"/>
</GridLayout>
```

<GridLayoutComplexGridDoc />
</DocExampleBox>

## Props

| Name    | Type   | Default | Web | Mobile |
| ------- | ------ | ------- | --- | ------ |
| columns | String |         | ✔   | ✔      |
| rows    | String |         | ✔   | ✔      |

## Additional Children Props

| Name    | Type   | Default | Web | Mobile |
| ------- | ------ | ------- | --- | ------ |
| row     | Number | `0`     | ✔   | ✔      |
| col     | Number | `0`     | ✔   | ✔      |
| rowSpan | Number |         | ✔   | ✔      |
| colSpan | Number |         | ✔   | ✔      |

## References

> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/layouts/grid-layout/)
> or [NativeScript Documentation](https://docs.nativescript.org/api-reference/modules/_ui_layouts_grid_layout_)
