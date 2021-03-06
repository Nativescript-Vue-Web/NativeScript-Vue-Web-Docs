---
title: Elements
type: elements
---

## Utilities

### v-template

### v-view

> The `v-view`directive lets you set the current element's View as a parent property.
> The `<RadSideDrawer>` component is part of the Progress NativeScript UI package.

```html
<Child v-view:parentPropertyName />
<!-- same as: -->
<Child ~parentPropertyName />
```

```html
<RadSideDrawer>
  <StackLayout ~drawerContent />
  <StackLayout ~mainContent />
</RadSideDrawer>
```

#### References

> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/utilities/v-view/)

<iframe src="https://codesandbox.io/embed/0o9mjzy1k0?hidenavigation=1&module=%2Fsrc%2FApp.vue" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

## Layouts

### AbsoluteLayout

> This is an overview of the most common usage of AbsoluteLayout.

#### A grid-like layout

```html
<AbsoluteLayout backgroundColor="#3c495e">
  <Label text="10,10" left="10" top="10" width="100" height="100" backgroundColor="#43b883"/>
  <Label text="120,10" left="120" top="10" width="100" height="100" backgroundColor="#43b883"/>
  <Label text="10,120" left="10" top="120" width="100" height="100" backgroundColor="#43b883"/>
  <Label text="120,120" left="120" top="120" width="100" height="100" backgroundColor="#43b883"/>
</AbsoluteLayout>
```

#### Overlapping elements

```html
<AbsoluteLayout backgroundColor="#3c495e">
  <Label text="10,10" left="10" top="10" width="100" height="100" backgroundColor="#289062"/>
  <Label text="30,40" left="30" top="40" width="100" height="100" backgroundColor="#43b883"/>
</AbsoluteLayout>
```

#### Props

None

#### Additional Children Props

> When an element is a direct child of <AbsoluteLayout>, you can work with the following additional properties.

| Name | Type   | Default | Web | Mobile |
| ---- | ------ | ------- | --- | ------ |
| top  | Number |         | ✔   | ✔      |
| left | Number |         | ✔   | ✔      |

#### References

> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/layouts/absolute-layout/)
> or [NativeScript Documentation](https://docs.nativescript.org/api-reference/modules/_ui_layouts_absolute_layout_)

<iframe src="https://codesandbox.io/embed/lrv8061359?hidenavigation=1&module=%2Fsrc%2FApp.vue" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

### DockLayout

> `<DockLayout>` is a layout container that lets you dock child elements to the sides or the center of the layout.

#### Dock to every side without stretching the last child

```html
<DockLayout stretchLastChild="false" backgroundColor="#3c495e">
  <Label text="left" dock="left" width="40" backgroundColor="#43b883"/>
  <Label text="top" dock="top" height="40" backgroundColor="#289062"/>
  <Label text="right" dock="right" width="40" backgroundColor="#43b883"/>
  <Label text="bottom" dock="bottom" height="40" backgroundColor="#289062"/>
</DockLayout>
```

#### Dock to every side and the center

```html
<DockLayout stretchLastChild="true" backgroundColor="#3c495e">
  <Label text="left" dock="left" width="40" backgroundColor="#43b883"/>
  <Label text="top" dock="top" height="40" backgroundColor="#289062"/>
  <Label text="right" dock="right" width="40" backgroundColor="#43b883"/>
  <Label text="bottom" dock="bottom" height="40" backgroundColor="#289062"/>
  <Label text="center" backgroundColor="#1c6b48" />
</DockLayout>
```

#### Props

| Name             | Type    | Default | Web | Mobile |
| ---------------- | ------- | ------- | --- | ------ |
| stretchLastChild | Boolean | `false` | ✔   | ✔      |

#### Additional Children Props

> When an element is a direct child of <DockLayout>, you can work with the following additional properties.

| Name | Type                             | Default | Web | Mobile |
| ---- | -------------------------------- | ------- | --- | ------ |
| dock | `top`, `right`, `bottom`, `left` |         | ✔   | ✔      |

#### References

> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/layouts/dock-layout/)
> or [NativeScript Documentation](https://docs.nativescript.org/api-reference/modules/_ui_layouts_dock_layout_)

<iframe src="https://codesandbox.io/embed/1zlq9x6954?hidenavigation=1&module=%2Fsrc%2FApp.vue" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

### FlexboxLayout

> This is an overview of the most common usage of FlexboxLayout.

```html
<FlexboxLayout backgroundColor="#3c495e">
  <Label text="first" width="70" backgroundColor="#43b883"/>
  <Label text="second" width="70" backgroundColor="#1c6b48"/>
  <Label text="third" width="70" backgroundColor="#289062"/>
</FlexboxLayout>
```

`FlexboxLayout` helps to adjust child components both horizontally and vertically.

#### Props

| Name           | Type   | Default      | Web | Mobile |
| -------------- | ------ | ------------ | --- | ------ |
| flexDirection  | String | `row`        | ✔   | ✔      |
| flexWrap       | String | `nowrap`     | ✔   | ✔      |
| justifyContent | String | `flex-start` | ✔   | ✔      |
| alignItems     | String | `stretch`    | ✔   | ✔      |
| alignContent   | String | `stretch`    | ✔   | ✔      |

#### Additional Children Props

> When an element is a direct child of <FlexboxLayout>, you can work with the following additional properties.

| Name           | Type    | Default   | Web | Mobile |
| -------------- | ------- | --------- | --- | ------ |
| order          | Number  |           | ✔   | ✔      |
| flexGrow       | Number  |           | ✔   | ✔      |
| flexShrink     | Number  | `1`       | ✔   | ✔      |
| alignSelf      | String  | `stretch` | ✔   | ✔      |
| flexWrapBefore | Boolean | `false`   | ✔   | ✔      |

#### References

> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/layouts/flexbox-layout/)
> or [NativeScript Documentation](https://docs.nativescript.org/api-reference/modules/_ui_layouts_flexbox_layout_)

<iframe src="https://codesandbox.io/embed/y7k675mwx9?hidenavigation=1&module=%2Fsrc%2FApp.vue" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

### GridLayout

> This is an overview of the most common usage of GridLayout.
> `GridLayout` is a layout container that lets you arrange its child in a table-like manner.
> The following example creates a simple 2-by-2 grid with fixed column widths and row heights.

```html
<GridLayout columns="115, 115" rows="115, 115">
 <Label text="0,0" row="0" col="0" backgroundColor="#43b883"/>
 <Label text="0,1" row="0" col="1" backgroundColor="#1c6b48"/>
 <Label text="1,0" row="1" col="0" backgroundColor="#289062"/>
 <Label text="1,1" row="1" col="1" backgroundColor="#43b883"/>
</GridLayout>
```

> The following example creates a grid with responsive design, where space is alotted proportionally to child elements.

```html
<GridLayout columns="*, 2*" rows="2*, 3*" backgroundColor="#3c495e">
 <Label text="0,0" row="0" col="0" backgroundColor="#43b883"/>
 <Label text="0,1" row="0" col="1" backgroundColor="#1c6b48"/>
 <Label text="1,0" row="1" col="0" backgroundColor="#289062"/>
 <Label text="1,1" row="1" col="1" backgroundColor="#43b883"/>
</GridLayout>
```

> The following example creates a complex grid with responsive design, mixed width and height settings, and some merged cells.

```html
<GridLayout columns="40, auto, *" rows="40, auto, *" backgroundColor="#3c495e">
 <Label text="0,0" row="0" col="0" backgroundColor="#43b883"/>
 <Label text="0,1" row="0" col="1" colSpan="2" backgroundColor="#1c6b48"/>
 <Label text="1,0" row="1" col="0" rowSpan="2" backgroundColor="#289062"/>
 <Label text="1,1" row="1" col="1" backgroundColor="#43b883"/>
 <Label text="1,2" row="1" col="2" backgroundColor="#289062"/>
 <Label text="2,1" row="2" col="1" backgroundColor="#1c6b48"/>
 <Label text="2,2" row="2" col="2" backgroundColor="#43b883"/>
</GridLayout>
```

#### Props

| Name    | Type   | Default | Web | Mobile |
| ------- | ------ | ------- | --- | ------ |
| columns | String |         | ✔   | ✔      |
| rows    | String |         | ✔   | ✔      |

#### Additional Children Props

| Name    | Type   | Default | Web | Mobile |
| ------- | ------ | ------- | --- | ------ |
| row     | Number | `0`     | ✔   | ✔      |
| col     | Number | `0`     | ✔   | ✔      |
| rowSpan | Number |         | ✔   | ✔      |
| colSpan | Number |         | ✔   | ✔      |

#### References

> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/layouts/grid-layout/)
> or [NativeScript Documentation](https://docs.nativescript.org/api-reference/modules/_ui_layouts_grid_layout_)

 <iframe src="https://codesandbox.io/embed/l9083jq48q" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
 
### StackLayout

> `<StackLayout>` is a layout container that lets you stack the child elements vertically (default) or horizontally.

> Default stacking

```html
<StackLayout backgroundColor="#3c495e">
  <Label text="first" height="70" backgroundColor="#43b883"/>
  <Label text="second" height="70" backgroundColor="#289062"/>
  <Label text="third" height="70" backgroundColor="#1c6b48"/>
</StackLayout>
```

> Horizontal stacking

```html
<StackLayout orientation="horizontal" backgroundColor="#3c495e">
  <Label text="first" width="70" backgroundColor="#43b883"/>
  <Label text="second" width="70" backgroundColor="#289062"/>
  <Label text="third" width="70" backgroundColor="#1c6b48"/>
</StackLayout>
```

> Stack layout with horizontally aligned children

```html
<StackLayout backgroundColor="#3c495e">
  <Label text="left" horizontalAlignment="left"
         width="33%" height="70" backgroundColor="#43b883"/>
  <Label text="center" horizontalAlignment="center"
         width="33%" height="70" backgroundColor="#289062"/>
  <Label text="right" horizontalAlignment="right"
         width="33%" height="70" backgroundColor="#1c6b48"/>
  <Label text="stretch" horizontalAlignment="stretch"
         height="70" backgroundColor="#43b883"/>
</StackLayout>
```

> Horizontal stack layout with vertically aligned children

```html
<StackLayout orientation="horizontal" backgroundColor="#3c495e">
  <Label text="top" verticalAlignment="top"
         width="70" height="33%" backgroundColor="#43b883"/>
  <Label text="center" verticalAlignment="center"
         width="70" height="33%" backgroundColor="#289062"/>
  <Label text="bottom" verticalAlignment="bottom"
         width="70" height="33%" backgroundColor="#1c6b48"/>
  <Label text="stretch" verticalAlignment="stretch"
         width="70" backgroundColor="#43b883"/>
</StackLayout>
```

#### Props

| Name        | Type                     | Default    | Web | Mobile |
| ----------- | ------------------------ | ---------- | --- | ------ |
| orientation | `vertical`, `horizontal` | `vertical` | ✔   | ✔      |

#### Additional Children Props

None

#### References

> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/layouts/stack-layout/)
> or [NativeScript Documentation](https://docs.nativescript.org/api-reference/modules/_ui_layouts_stack_layout_)

<iframe src="https://codesandbox.io/embed/9yv6r4ok7y?hidenavigation=1&module=%2Fsrc%2FApp.vue" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

### WrapLayout

`WrapLayout` is a layout container that lets you position items in rows or columns, based on the orientation property. When the space is filled, the container automatically wraps items onto a new row or column.

> This is an overview of the most common usage of WrapLayout.

`WrapLayout` is a layout container that lets you position items in rows or columns, based on the orientation property. When the space is filled, the container automatically wraps items onto a new row or column.

> The following example creates a row of equally-sized items. When the row runs out of space, the container wraps the last item on a new row.

```html
<WrapLayout height="450" width="450" backgroundColor="#3c495e">
  <Label text="first" class="wrapLayoutItem" backgroundColor="#43b883"/>
  <Label text="second" class="wrapLayoutItem" backgroundColor="#1c6b48"/>
  <Label text="third" class="wrapLayoutItem" backgroundColor="#289062"/>
  <Label text="fourth" class="wrapLayoutItem" backgroundColor="#289062"/>
</WrapLayout>
```

> The following example creates a column of equally-sized items. When the row runs out of space, the container wraps the last item on a new column.

```html
<WrapLayout height="450" width="450" orientation="vertical" backgroundColor="#3c495e">
  <Label text="first" class="wrapLayoutItem" backgroundColor="#43b883"/>
  <Label text="second" class="wrapLayoutItem" backgroundColor="#1c6b48"/>
  <Label text="third" class="wrapLayoutItem" backgroundColor="#289062"/>
  <Label text="fourth" class="wrapLayoutItem" backgroundColor="#289062"/>
</WrapLayout>
```

```css
.wrapLayoutItem {
  width: 140px;
  height: 140px;
}
```

#### Props

| Name        | Type   | Default      | Web | Mobile |
| ----------- | ------ | ------------ | --- | ------ |
| orientation | String | `horizontal` | ✔   | ✔      |
| itemWidth   | Number | `Number.NaN` | X   | ✔      |
| itemHeight  | Number | `Number.NaN` | X   | ✔      |

> There are no additional children props.

#### References

> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/layouts/wrap-layout/)
> or [NativeScript Documentation](https://docs.nativescript.org/api-reference/modules/_ui_layouts_wrap_layout_)

<iframe src="https://codesandbox.io/embed/xmj262j64?module=%2Fsrc%2FApp.vue" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

## Action-Bars

### ActionBar

> The ActionBar component is a NativeScript abstraction for the Android ActionBar, iOS NavigationBar and Web Toolbar.

#### Using a title

```html
<ActionBar title="MyApp" />
```

#### Using a custom title view

```html
<ActionBar>
  <StackLayout orientation="horizontal">
    <Label text="NativeScript" verticalAlignment="center" />
    <Label text="Vue Web" verticalAlignment="center" />
  </StackLayout>
</ActionBar>
```

#### Props

| Name  | Type   | Default | Web | Mobile |
| ----- | ------ | ------- | --- | ------ |
| title | String |         | ✔   | ✔      |

#### References

> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/action-bar/action-bar/)
> or [NativeScript Documentation](https://docs.nativescript.org/api-reference/classes/_ui_action_bar_.actionbar)

<iframe src="https://codesandbox.io/embed/92p675pw4r?module=%2Fsrc%2FApp.vue" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

### ActionItem

> The ActionItem component is used to add additional action buttons to the ActionBar.

```html
<ActionBar title="My App">
  <ActionItem @tap="onTapShare"
    ios.systemIcon="9" ios.position="left"
    android.systemIcon="ic_menu_share" android.position="actionBar" webIcon="fa fa-share" />
  <ActionItem @tap="onTapDelete" webIcon="fa fa-remove" />
</ActionBar>
```

#### Props

| Name    | Type   | Default | Web | Mobile |
| ------- | ------ | ------- | --- | ------ |
| webIcon | String |         | ✔   | ✘      |

#### Events

| Name | Web | Mobile |
| ---- | --- | ------ |
| tap  | ✔   | ✔      |

> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/action-bar/action-item/)
> or [NativeScript Documentation](https://docs.nativescript.org/api-reference/classes/_ui_action_bar_.actionitem)

<iframe src="https://codesandbox.io/embed/ooqn530l26?hidenavigation=1&module=%2Fsrc%2FApp.vue" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

### NavigationButton

> The NavigationButton component is a NativeScript abstraction for the Android navigation button, the iOS and web back button.

```html
<ActionBar title="My App">
  <NavigationButton text="Go back" @tap="goBack" webIcon="fa fa-arrow-left" />
</ActionBar>
```

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

<iframe src="https://codesandbox.io/embed/9y51w9oj54?hidenavigation=1&module=%2Fsrc%2FApp.vue" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

## Components

### ActivityIndicator

> This is an overview of the most common usage of ActivityIndicator.

```html
<ActivityIndicator busy="true" @busyChange="onBusyChanged" />
```

`ActivityIndicator` is a UI component that shows a progress indicator signaling to the user of an operation running in the background.

#### Props

| Name | Type    | Default | Web | Mobile |
| ---- | ------- | ------- | --- | ------ |
| busy | boolean |         | ✔   | ✔      |

#### Events

| Name       | Web | Mobile |
| ---------- | --- | ------ |
| busyChange | ✔   | ✔      |

#### References

> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/components/activity-indicator/)
> or [NativeScript Documentation](https://docs.nativescript.org/api-reference/classes/_ui_activity_indicator_.activityindicator)

<iframe src="https://codesandbox.io/embed/l52zmow45q" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

### Button

> This is an overview of the most common usage of Button.

```html
<Button text="Button" @tap="onButtonTap" />
```

`Button` is a UI component that displays a button which reacts to a user gesture.

#### Props

| Name     | Type    | Default | Web | Mobile |
| -------- | ------- | ------- | --- | ------ |
| text     | String  |         | ✔   | ✔      |
| textWrap | Boolean | `false` | ✔   | ✔      |

#### Events

| Name | Web | Mobile |
| ---- | --- | ------ |
| tap  | ✔   | ✔      |

#### References

> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/components/button/)
> or [NativeScript Documentation](https://docs.nativescript.org/api-reference/classes/_ui_button_.button)

<iframe src="https://codesandbox.io/embed/n5y3lym66p?hidenavigation=1&module=%2Fsrc%2FApp.vue" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

### DatePicker

### HtmlView

> This is an overview of the most common usage of HtmlView.

```html
<HtmlView html="<div><h1>HtmlView</h1></div>" />
```

`HtmlView` is a is a UI component that lets you show static HTML content.

#### Props

| Name | Type   | Default | Web | Mobile |
| ---- | ------ | ------- | --- | ------ |
| text | String |         | ✔   | ✔      |

#### References

> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/components/html-view/)
> or [NativeScript Documentation](https://docs.nativescript.org/api-reference/classes/_ui_html_view_.htmlview)

<iframe src="https://codesandbox.io/embed/4ro87o5m0x" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

### Image

> This is an overview of the most common usage of Image.

Displaying an image relative to the app directory

```html
<Img src="~/logo.png" stretch="none" />
```

Displaying an image from a URL

```html
<Img src="https://art.nativescript-vue.org/NativeScript-Vue-White-Green.png" stretch="none" />
```

#### Props

| Name      | Type                                      | Default | Web | Mobile |
| --------- | ----------------------------------------- | ------- | --- | ------ |
| src       | String                                    |         | ✔   | ✔      |
| tintColor | String                                    |         | ✔   | ✔      |
| stretch   | `none`, `aspectFill`, `aspectFit`, `fill` | `none`  | ✔   | ✔      |
| loadMode  | `async`, `sync`                           | `async` | ✔   | ✔      |

#### References

> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/components/image/)
> or [NativeScript Documentation](https://docs.nativescript.org/api-reference/classes/_ui_image_.image)

<iframe src="https://codesandbox.io/embed/vnxyxz9553?hidenavigation=1&module=%2Fsrc%2FApp.vue" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

### Label

> This is an overview of the most common usage of Label.

```html
<Label text="Label" />
```

`Label` is a UI component that displays read-only text.

#### Props

| Name     | Type    | Default | Web | Mobile |
| -------- | ------- | ------- | --- | ------ |
| text     | String  |         | ✔   | ✔      |
| textWrap | Boolean | `false` | ✔   | ✔      |

#### References

> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/components/label/)
> or [NativeScript Documentation](https://docs.nativescript.org/api-reference/classes/_ui_label_.label)

<iframe src="https://codesandbox.io/embed/lrn8qy0yv9?hidenavigation=1&module=%2Fsrc%2FApp.vue" style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

### ListPicker

> This is an overview of the most common usage of ListPicker.

```html
 <ListPicker v-model="selectedIndex" :items="listOfItems" @selectedIndexChange="selectedIndexChanged" />
```

`ListPicker` is a UI component that lets the user select a value from a pre-configured list.

#### Props

| Name          | Type          | Default | Web | Mobile |
| ------------- | ------------- | ------- | --- | ------ |
| items         | Array<String> |         | ✔   | ✔      |
| selectedIndex | Number        |         | ✔   | ✔      |

#### Events

| Name                | Web | Mobile |
| ------------------- | --- | ------ |
| selectedIndexChange | ✔   | ✔      |

#### References

> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/components/list-picker/)
> or [NativeScript Documentation](https://docs.nativescript.org/api-reference/classes/_ui_list_picker_.listpicker)

<iframe src="https://codesandbox.io/embed/l9l6o34mvm" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

### ListView

### Progress

> This is an overview of the most common usage of Progress.

```html
<Progress :value="currentProgress" />
```

#### Props

| Name     | Type   | Default | Web | Mobile |
| -------- | ------ | ------- | --- | ------ |
| value    | Number | 0       | ✔   | ✔      |
| maxValue | Number | 100     | ✔   | ✔      |

#### Events

| Name        | Web | Mobile |
| ----------- | --- | ------ |
| valueChange | ✔   | ✔      |

#### References

> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/components/progress/)
> or [NativeScript Documentation](https://docs.nativescript.org/api-reference/classes/_ui_progress_.progress)

<iframe src="https://codesandbox.io/embed/zkm7o31o6x?hidenavigation=1&module=%2Fsrc%2FApp.vue" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

### ScrollView

> This is an overview of the most common usage of ScrollView.

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

#### Props

| Name                      | Type                     | Default    | Web | Mobile |
| ------------------------- | ------------------------ | ---------- | --- | ------ |
| orientation               | `horizontal`, `vertical` | `vertical` | ✔   | ✔      |
| scrollBarIndicatorVisible | Boolean                  | `true`     | ✔   | ✘      |

#### Events

| Name   | Web | Mobile |
| ------ | --- | ------ |
| scroll | ✔   | ✔      |

#### References

> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/components/scroll-view/)
> or [NativeScript Documentation](https://docs.nativescript.org/api-reference/classes/_ui_scroll_view_.scrollview)

<iframe src="https://codesandbox.io/embed/y3jzz2v5mv?hidenavigation=1&module=%2Fsrc%2FApp.vue" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

### SearchBar

> This is an overview of the most common usage of SearchBar.

> `<SearchBar>` is a UI component that provides a user interface for entering search queries and submitting requests to the search provider.

```html
<SearchBar hint="Search hint" :text="searchPhrase" @textChange="onTextChanged" @submit="onSubmit" />
```

> `<SearchBar>` provides two-way data binding using v-model.

```html
<SearchBar v-model="searchQuery" />
```

#### Props

| Name                     | Type   | Default | Web | Mobile |
| ------------------------ | ------ | ------- | --- | ------ |
| hint                     | String |         | ✔   | ✔      |
| text                     | String |         | ✔   | ✘      |
| textFieldBackgroundColor | String |         | ✔   | ✔      |
| textFieldHintColor       | String |         | ✘   | ✔      |

#### Events

| Name       | Web | Mobile |
| ---------- | --- | ------ |
| textChange | ✔   | ✔      |
| submit     | ✔   | ✔      |
| clear      | ✔   | ✔      |

#### References

> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/components/search-bar/)
> or [NativeScript Documentation](https://docs.nativescript.org/api-reference/classes/_ui_search_bar_.searchbar)

<iframe src="https://codesandbox.io/embed/m7yz90mn6p" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

### SegmentedBar

> `<SegmentedBar>` is a UI bar component that displays a set of buttons for discrete selection. Can show text or images.

```html
<SegmentedBar>
  <SegmentedBarItem title="Segment 1"/>
  <SegmentedBarItem title="Segment 2"/>
  <SegmentedBarItem title="Segment 3"/>
</SegmentedBar>
```

`<SegmentedBar>` provides two-way data binding using v-model.

```html
<SegmentedBar v-model="selectedIndex" :items="items" @selectedIndexChanged="changed" />
```

#### Props

| Name          | Type          | Default | Web | Mobile |
| ------------- | ------------- | ------- | --- | ------ |
| items         | Array<String> |         | ✔   | ✔      |
| selectedIndex | Number        |         | ✔   | ✔      |

#### Events

| Name                | Web | Mobile |
| ------------------- | --- | ------ |
| selectedIndexChange | ✔   | ✔      |

#### References

> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/components/segmented-bar/)
> or [NativeScript Documentation](https://docs.nativescript.org/api-reference/modules/_ui_segmented_bar_)

<iframe src="https://codesandbox.io/embed/8o0v3jyl9?hidenavigation=1&module=%2Fsrc%2FApp.vue" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

### Slider

> This is an overview of the most common usage of Slider.

```html
<Slider value="80" @valueChange="onValueChanged" />
```

`Slider` provides two-way data binding using v-model.

```html
<Slider v-model="value" />
```

#### Props

| Name     | Type   | Default | Web | Mobile |
| -------- | ------ | ------- | --- | ------ |
| value    | Number | `0`     | ✔   | ✔      |
| minValue | Number | `0`     | ✔   | ✔      |
| maxValue | Number | `100`   | ✔   | ✔      |

#### Events

| Name        | Web | Mobile |
| ----------- | --- | ------ |
| valueChange | ✔   | ✔      |

#### References

> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/components/slider/)
> or [NativeScript Documentation](https://docs.nativescript.org/api-reference/classes/_ui_slider_.slider)

<iframe src="https://codesandbox.io/embed/8l36nz28p8?module=%2Fsrc%2FApp.vue" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

### Switch

> This is an overview of the most common usage of Switch.
> "Switcher" is being used in the implementation thus, Switch word is a reserved one for VueJs.

```html
<Switch checked="true" />
```

`Switch` provides two-way data binding using v-model.

```html
<Switch v-model="itemEnabled" />
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

<iframe src="https://codesandbox.io/embed/p7wyk8xl3x" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

### TabView

> This is an overview of the most common usage of TabView and TabViewItem.

```html
<TabView :selectedIndex="selectedIndex" @selectedIndexChanged="changed">
    <TabViewItem title="Tab 1" webIcon="fa fa-eye">
        <StackLayout>
            <Label text="Content for Tab 1"/>
            <HelloWorld msg="Welcome to Your Vue.js App"/>
        </StackLayout>
    </TabViewItem>
    <TabViewItem title="Tab 2">
        <Label text="Content for Tab 2"/>
    </TabViewItem>
    <TabViewItem title="Tab 3">
        <Label text="Content for Tab 3"/>
    </TabViewItem>
</TabView>
```

#### TabView Props

| Name          | Type   | Default | Web | Mobile |
| ------------- | ------ | ------- | --- | ------ |
| selectedIndex | Number | 0       | ✔   | ✔      |

#### TabView Events

| Name                 | Web | Mobile |
| -------------------- | --- | ------ |
| selectedIndexChanged | ✔   | ✔      |

#### TabViewItem Props

| Name    | Type   | Default | Web | Mobile |
| ------- | ------ | ------- | --- | ------ |
| id      | String |         | ✔   | ✔      |
| title   | String |         | ✔   | ✔      |
| webIcon | String |         | ✔   | ✘      |

> NOTE: _TabView only accept TabViewItem as child._
> _Be Aware limitations of NativeScript-Vue and NativeScript before using this component._

#### References

> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/components/tab-view/)
> or [NativeScript Documentation](https://docs.nativescript.org/ui/ns-ui-widgets/tab-view)

<iframe src="https://codesandbox.io/embed/30vr9xw6nm?hidenavigation=1&module=%2Fsrc%2FApp.vue" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

### TextField

> This is an overview of the most common usage of TextField.

```html
<TextField :text="textFieldValue" hint="Enter text..." />
```

`TextField` provides two-way data binding using v-model.

```html
<TextField
v-model="textFieldInput"
hint="This is placeholder"
:editable="true"
@returnPress="textFieldreturnPress"
@textChange="textFieldtextChange" />
```

#### Props

| Name          | Type                                              | Default | Web | Mobile |
| ------------- | ------------------------------------------------- | ------- | --- | ------ |
| text          | String                                            |         | ✔   | ✔      |
| hint          | String                                            |         | ✔   | ✔      |
| editable      | Boolean                                           |         | ✔   | ✔      |
| maxLength     | Number                                            |         | ✔   | ✔      |
| secure        | Boolean                                           | `false` | ✔   | ✔      |
| keyboardType  | `datetime` , `phone` , `number` , `url` , `email` |         | ✔   | ✔      |
| returnKeyType | `done`,`next`,`go`,`search`,`send`                |         | ✘   | ✔      |
| autocorrect   | Boolean                                           |         | ✔   | ✔      |

#### Events

| Name        | Web | Mobile |
| ----------- | --- | ------ |
| textChange  | ✔   | ✔      |
| returnPress | ✔   | ✔      |
| focus       | ✔   | ✔      |
| blur        | ✔   | ✔      |

#### References

> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/components/text-field/)
> or [NativeScript Documentation](https://docs.nativescript.org/api-reference/modules/_ui_text_field_)

<iframe src="https://codesandbox.io/embed/l764j9p8pl?hidenavigation=1&module=%2Fsrc%2FApp.vue" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

### TextView

> This is an overview of the most common usage of TextView.

```html
<TextView text="Multi\nLine\nText" />
```

`TextView` provides two-way data binding using v-model.

```html
  <TextView v-model="textViewInput" :editable=true />
```

#### Props

| Name          | Type                                              | Default | Web | Mobile |
| ------------- | ------------------------------------------------- | ------- | --- | ------ |
| text          | String                                            |         | ✔   | ✔      |
| hint          | String                                            |         | ✔   | ✔      |
| editable      | Boolean                                           |         | ✔   | ✔      |
| maxLength     | Number                                            |         | ✔   | ✔      |
| keyboardType  | `datetime` , `phone` , `number` , `url` , `email` |         | ✔   | ✔      |
| returnKeyType | `done`,`next`,`go`,`search`,`send`                |         | ✘   | ✔      |
| autocorrect   | Boolean                                           |         | ✔   | ✔      |

#### Events

| Name        | Web | Mobile |
| ----------- | --- | ------ |
| textChange  | ✔   | ✔      |
| returnPress | ✔   | ✔      |
| focus       | ✔   | ✔      |
| blur        | ✔   | ✔      |

#### References

> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/components/text-view/)
> or [NativeScript Documentation](https://docs.nativescript.org/api-reference/classes/_ui_text_view_.textview)

<iframe src="https://codesandbox.io/embed/w61lryop88" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

### TimePicker

> `<TimePicker>` is a UI component that lets users select time.

```html
<TimePicker :hour="selectedHour" :minute="selectedMinute" />
```

> `<TimePicker>` provides two-way data binding using v-model.

```html
<TimePicker v-model="selectedTime" />
```

#### Props

| Name           | Type    | Default | Web | Mobile |
| -------------- | ------- | ------- | --- | ------ |
| hour           | Number  |         | ✔   | ✔      |
| minute         | Number  |         | ✔   | ✔      |
| time           | Date    | Now     | ✔   | ✔      |
| minHour        | Number  |         | ✔   | ✔      |
| maxHour        | Number  |         | ✔   | ✔      |
| minMinute      | Number  |         | ✔   | ✔      |
| maxMinute      | Number  |         | ✔   | ✔      |
| minuteInterval | Boolean |         | ✘   | ✔      |

#### Events

| Name       | Web | Mobile |
| ---------- | --- | ------ |
| timeChange | ✔   | ✔      |

#### References

> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/components/time-picker/)
> or [NativeScript Documentation](https://docs.nativescript.org/api-reference/classes/_ui_time_picker_.timepicker)

<iframe src="https://codesandbox.io/embed/jvpprv63n5" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

### WebView

> `<WebView>` is a UI component that lets you show web content in your app. You can pull and show content from a URL or a local HTML file, or you can render static HTML content.

```html
<WebView  src="/html"/>
```

> Note: If provided src starts with "~/", it will be stripped and new path will be relative to the root "/".

```html
<WebView src="http://nativescript-vue.org/" />
```

```html
<WebView src="<div><h1>Some static HTML</h1></div>" />
```

#### References

> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/components/web-view/)
> or [NativeScript Documentation](https://docs.nativescript.org/api-reference/classes/_ui_web_view_.webview)

<iframe src="https://codesandbox.io/embed/o4zv94romq" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

### Frame

> `<Frame>` is a UI component used to display `<Page>` elements.

> Multiple Frames

```html
<GridLayout columns="*, *">
  <Frame col="0"/>
  <Frame col="1"/>
</GridLayout>
```

> A frame with a default page

```html
<Frame>
  <Page>
    <ActionBar title="Default Page Title" />
    <GridLayout>
      <Label text="Default Page Content" />
    </GridLayout>
  </Page>
</Frame>
```

#### References

> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/components/frame/)
> or [NativeScript Documentation](https://docs.nativescript.org/api-reference/classes/_ui_frame_.frame)

<iframe src="https://codesandbox.io/embed/yjmjyny5jx" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

## Dialogs

### ActionDialog

> This is an overview of the most common usage of ActionDialog. For more information about the available properties, methods, or events, head over to [the complete API documentation for ActionDialog](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#action).

The `action()` method is available globally. You can call it anywhere in your app.

```js
action("Your message", "Cancel button text", ["Option1", "Option2"]).then(
  result => {
    console.log(result);
  }
);
```

<iframe src="https://codesandbox.io/embed/24oz9vqnlp" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

### AlertDialog

> This is an overview of the most common usage of AlertDialog. For more information about the available properties, methods, or events, head over to [the complete API documentation for AlertDialog](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#alert).

The `alert()` method shows a message and an OK button. Use it to show information and notifications that do not require an action from the user.

```js
alert("Your message").then(() => {
  console.log("Alert dialog closed.");
});
```

<iframe src="https://codesandbox.io/embed/m8x5q5njx" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

### ConfirmDialog

> This is an overview of the most common usage of ConfirmDialog. For more information about the available properties, methods, or events, head over to [the complete API documentation for ConfirmDialog](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#confirm).

The `confirm()` method shows a confirmation message and Cancel and OK buttons.

```js
confirm("Your message").then(result => {
  console.log(result);
});
```

<iframe src="https://codesandbox.io/embed/m7xmj8xnxj" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

### LoginDialog

> This is an overview of the most common usage of LoginDialog. For more information about the available properties, methods, or events, head over to [the complete API documentation for LoginDialog](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#login).

The `login()` method shows a dialog where the user can provide login credentials.

```js
login({
  title: "Your login title",
  message: "Your login message",
  okButtonText: "Your OK button text",
  cancelButtonText: "Your Cancel button text",
  userName: "Username field value",
  password: "Password field value"
}).then(result => {
  console.log(
    `Dialog result: ${result.result}, user: ${result.userName}, pwd: ${
      result.password
    }`
  );
});
```

<iframe src="https://codesandbox.io/embed/xzxk3w3l0w" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

### PromptDialog

> This is an overview of the most common usage of PromptDialog. For more information about the available properties, methods, or events, head over to [the complete API documentation for PromptDialog](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#prompt).

The `prompt()` method shows a dialog with a single-line field for user input.

```js
prompt({
  title: "Your dialog title",
  message: "Your message",
  okButtonText: "Your OK button text",
  cancelButtonText: "Your Cancel button text",
  defaultText: "Suggested user input"
}).then(result => {
  console.log(`Dialog result: ${result.result}, text: ${result.text}`);
});
```

<iframe src="https://codesandbox.io/embed/oq70yj50q" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
