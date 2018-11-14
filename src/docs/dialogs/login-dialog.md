# LoginDialog

This is an overview of the most common usage of LoginDialog. For more information about the available properties, methods, or events, head over to [the complete API documentation for LoginDialog](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#login).

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

<DocExampleBox codeBox="https://codesandbox.io/s/xzxk3w3l0w">

```html
<Button text="Show Login Dialog" width="200" @tap="showLoginDialog" />
```
```js
showConfirmDialog: function() {
    login({
        title: "Your login title",
        message: "Your login message",
        okButtonText: "OK",
        cancelButtonText: "Cancel",
        userName: "Username field value",
        password: "Password field value"
        }).then(result => {
        if(result) {
            console.log('Username: ', result.userName);
            console.log('Password: ', result.password);
        }
    });
},
```

<LoginDialogDoc />
</DocExampleBox>