---
sidebarDepth: 0
---

# PromptDialog

This is an overview of the most common usage of PromptDialog.

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

<DocExampleBox codeBox="https://codesandbox.io/s/oq70yj50q?module=%2Fsrc%2FApp.vue">

```html
<Button text="Show Login Dialog" width="200" @tap="showLoginDialog" />
```

```js
showPromptDialog: function() {
    prompt(
        "Your message to the user",
        "Suggested user input",
        "OK",
        "Cancel"
      ).then(result => {
        if (result) {
          console.log('Entered Text:', result.value);
        }
    });
}
```

<PromptDialogDoc />
</DocExampleBox>

## References

> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/dialogs/prompt/)
> or [NativeScript Documentation](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#prompt)
