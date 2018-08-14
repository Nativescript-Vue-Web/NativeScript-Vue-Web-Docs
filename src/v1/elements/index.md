---
title: Elements
type: elements
---

## Layouts
### AbsoluteLayout
### DockLayout
### FlexboxLayout
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
### DatePicker
### HtmlView
### Image
### Label
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
> For more information about the available properties, methods, or events head over to the complete [Native Vue API Documentation](https://nativescript-vue.org/en/docs/elements/components/text-field/)
> or [Native Reference](https://docs.nativescript.org/api-reference/modules/_ui_text_field_) 


### TextView
### TimePicker
### WebView

## Dialogs
### ActionDialog
### AlertDialog
### ConfirmDialog
### LoginDialog
### PromptDialog
