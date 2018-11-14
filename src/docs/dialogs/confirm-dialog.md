---
sidebarDepth: 0
---

# ConfirmDialog

This is an overview of the most common usage of ConfirmDialog. For more information about the available properties, methods, or events, head over to [the complete API documentation for ConfirmDialog](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#confirm).

The `confirm()` method shows a confirmation message and Cancel and OK buttons.

```js
confirm("Your message").then(result => {
  console.log(result);
});
```

<DocExampleBox codeBox="https://codesandbox.io/s/m7xmj8xnxj">

```html
<Button text="Show Confirm Dialog" width="200" @tap="showConfirmDialog" />
```

```js
showConfirmDialog: function() {
    confirm("Your title", "Your message", "OK", "Cancel").then(() => {
    });
}
```

<ConfirmDialogDoc />
</DocExampleBox>