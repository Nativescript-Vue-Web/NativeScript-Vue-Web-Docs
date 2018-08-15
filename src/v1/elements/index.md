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

### GridLayout
### StackLayout
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


### DatePicker
### HtmlView
### Image
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

### ListPicker
### ListView
### Progress
### ScrollView
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
