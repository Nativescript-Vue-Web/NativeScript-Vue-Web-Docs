---
title: Elements
type: elements
---

## Layouts
### AbsoluteLayout
### DockLayout
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
Name | Type | Default | Web | Mobile
------------ | ------------- | ------------- | ------------- | -------------
flexDirection | String | `row` | ✔ | ✔
flexWrap | String | `nowrap` | ✔ | ✔
justifyContent | String | `flex-start` | ✔ | ✔
alignItems | String | `stretch` | ✔ | ✔
alignContent | String | `stretch` | ✔ | ✔

#### Additional Children Props
> When an element is a direct child of <FlexboxLayout>, you can work with the following additional properties.

Name | Type | Default | Web | Mobile
------------ | ------------- | ------------- | ------------- | -------------
order | Number | | ✔ | ✔
flexGrow | Number | | ✔ | ✔
flexShrink | Number | `1` | ✔ | ✔
alignSelf | String | `stretch` | ✔ | ✔
flexWrapBefore | Boolean | `false` | ✔ | ✔

#### References
> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/layouts/flexbox-layout/)
> or [NativeScript Documentation](https://docs.nativescript.org/api-reference/modules/_ui_layouts_flexbox_layout_) 

<iframe src="https://codesandbox.io/embed/y7k675mwx9?hidenavigation=1" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

### GridLayout
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

Name | Type | Default | Web | Mobile 
------------ | ------------- | ------------- | ------------- | -------------
orientation | `vertical`, `horizontal` | `vertical` | ✔ | ✔

#### Additional Children Props

None

#### References
> https://nativescript-vue.org/en/docs/elements/layouts/stack-layout/
> https://docs.nativescript.org/api-reference/modules/_ui_layouts_stack_layout_

### WrapLayout

## Action-Bars
### ActionBar
### ActionItem
### NavigationButton

## Components
### ActivityIndicator
### Button
> This is an overview of the most common usage of Button. 

```html
<Button text="Button" @tap="onButtonTap" />
```
`Button` is a UI component that displays a button which reacts to a user gesture.

#### Props
Name | Type | Default | Web | Mobile 
------------ | ------------- | ------------- | ------------- | -------------
text | String | | ✔ | ✔
textWrap | Boolean | `false` | ✔ | ✔

#### Events
Name | Web | Mobile 
------------ | ------------- | -------------
tap | ✔ | ✔
  
#### References
> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/components/button/)
> or [NativeScript Documentation](https://docs.nativescript.org/api-reference/classes/_ui_button_.button) 

<iframe src="https://codesandbox.io/embed/n5y3lym66p?hidenavigation=1" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

### DatePicker
### HtmlView
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
Name | Type | Default | Web | Mobile 
------------ | ------------- | ------------- | ------------- | -------------
src | String | | ✔ | ✔
tintColor | String |  | ✔ | ✔
stretch | `none`, `aspectFill`, `aspectFit`, `fill` | `none` | ✔ | ✔
loadMode | `async`, `sync` | `async` | ✔ | ✔

#### References
> https://nativescript-vue.org/en/docs/elements/components/image/
> https://docs.nativescript.org/api-reference/classes/_ui_image_.image

<iframe src="https://codesandbox.io/embed/vnxyxz9553?hidenavigation=1" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

### Label
> This is an overview of the most common usage of Label. 

```html
<Label text="Label" />
```
`Label` is a UI component that displays read-only text.

#### Props
Name | Type | Default | Web | Mobile 
------------ | ------------- | ------------- | ------------- | -------------
text | String | | ✔ | ✔
textWrap | Boolean | `false` | ✔ | ✔

#### References
> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/components/label/)
> or [NativeScript Documentation](https://docs.nativescript.org/api-reference/classes/_ui_label_.label)

<iframe src="https://codesandbox.io/embed/lrn8qy0yv9?hidenavigation=1" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe> 

### ListPicker
### ListView
### Progress
> This is an overview of the most common usage of Progress. 

```html
<Progress :value="currentProgress" />
```

#### Props
Name | Type | Default | Web | Mobile 
------------ | ------------- | ------------- | ------------- | -------------
value | Number | 0 | ✔ | ✔
maxValue | Number | 100 | ✔ | ✔

#### Events
Name | Web | Mobile 
------------ | ------------- | -------------
valueChange | ✔ | ✔

#### References
> https://nativescript-vue.org/en/docs/elements/components/progress/
> https://docs.nativescript.org/api-reference/classes/_ui_progress_.progress

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
Name | Type | Default | Web | Mobile 
------------ | ------------- | ------------- | ------------- | -------------
orientation | `horizontal `, `vertical` | `vertical` | ✔ | ✔
scrollBarIndicatorVisible | Boolean | `true` | ✔ | ✘

#### Events
Name | Web | Mobile 
------------ | ------------- | -------------
scroll | ✔ | ✔

#### References
> https://nativescript-vue.org/en/docs/elements/components/scroll-view/
> https://docs.nativescript.org/api-reference/classes/_ui_scroll_view_.scrollview

<iframe src="https://codesandbox.io/embed/y3jzz2v5mv?hidenavigation=1" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

### SearchBar
### SegmentedBar
### Slider
### Switch
### TabView

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
Name | Type | Default | Web | Mobile 
------------ | ------------- | ------------- | ------------- | -------------
text | String | | ✔ | ✔
hint | String | | ✔ | ✔
editable | Boolean | | ✔ | ✔
maxLength | Number | | ✔ | ✔
secure | Boolean | `false` | ✔ | ✔
keyboardType | `datetime` , `phone` , `number` , `url` , `email` | | ✔ | ✔
returnKeyType | `done`,`next`,`go`,`search`,`send` | | ✘ | ✔
autocorrect | Boolean | | ✔ | ✔

#### Events
Name | Web | Mobile 
------------ | ------------- | -------------
textChange | ✔ | ✔
returnPress | ✔ | ✔
focus | ✔ | ✔
blur | ✔ | ✔  

#### References
> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/components/text-field/)
> or [NativeScript Documentation](https://docs.nativescript.org/api-reference/modules/_ui_text_field_) 

### TextView
### TimePicker
### WebView

## Dialogs
### ActionDialog
### AlertDialog
### ConfirmDialog
### LoginDialog
### PromptDialog
