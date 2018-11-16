---
sidebarDepth: 0
---

# AlertDialog

This is an overview of the most common usage of AlertDialog.

The `alert()` method shows a message and an OK button. Use it to show information and notifications that do not require an action from the user.

```js
alert("Your message").then(() => {
  console.log("Alert dialog closed.");
});
```

<DocExampleBox codeBox="https://codesandbox.io/s/m8x5q5njx?module=%2Fsrc%2FApp.vue">

```html
  <Button text="Show Alert Dialog" width="200" @tap="showAlertDialog" />
```

```js
   showAlertDialog: function() {
      alert("Your title", "Your message", "OK").then(() => {
        console.log("Alert dialog closed.");
      });
    }
```

<AlertDialogDoc />
</DocExampleBox>

## References

> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/dialogs/alert/)
> or [NativeScript Documentation](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#alert)
