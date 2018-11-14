# PromptDialog

This is an overview of the most common usage of PromptDialog. For more information about the available properties, methods, or events, head over to [the complete API documentation for PromptDialog](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#prompt).

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
<DocExampleBox codeBox="https://codesandbox.io/s/oq70yj50q">

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
