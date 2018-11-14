---
sidebarDepth: 0
---
# Image

This is an overview of the most common usage of Image.

Displaying an image relative to the app directory

<DocExampleBox codeBox="https://codesandbox.io/s/vnxyxz9553">

```html
<Img src="~/images/logo.png " stretch="fill" />
```

<ImageDoc />
</DocExampleBox>

Displaying an image from a URL

## Props

| Name      | Type                                      | Default | Web | Mobile |
| --------- | ----------------------------------------- | ------- | --- | ------ |
| src       | String                                    |         | ✔   | ✔      |
| tintColor | String                                    |         | ✔   | ✔      |
| stretch   | `none`, `aspectFill`, `aspectFit`, `fill` | `none`  | ✔   | ✔      |
| loadMode  | `async`, `sync`                           | `async` | ✔   | ✔      |


## References

> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/components/image/)
> or [NativeScript Documentation](https://docs.nativescript.org/api-reference/classes/_ui_image_.image)
