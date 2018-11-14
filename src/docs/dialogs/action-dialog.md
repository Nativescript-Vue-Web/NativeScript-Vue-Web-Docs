---
sidebarDepth: 0
---

# Action Dialog

This is an overview of the most common usage of ActionDialog. For more information about the available properties, methods, or events, head over to [the complete API documentation for ActionDialog](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#action).

The `action()` method is available globally. You can call it anywhere in your app.

```js
action("Your message", "Cancel button text", ["Option1", "Option2"]).then(
  result => {
    console.log(result);
  }
);
```

<DocExampleBox codeBox="https://codesandbox.io/s/24oz9vqnlp">

```html
  <Button text="Show Action Dialog" width="200" @tap="showActionDialog" />
```

```js
  showActionDialog: function() {
      action("Your message", "Cancel button text", ["Option1", "Option2"]).then(
        result => {
          console.log(result);
        }
      );
    }
```

<ActionDialogDoc />
</DocExampleBox>
