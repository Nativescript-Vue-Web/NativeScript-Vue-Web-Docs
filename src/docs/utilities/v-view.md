---
sidebarDepth: 0
---

# v-view

The v-view directive lets you set the current element's View as a parent property.
The `<RadSideDrawer>` component is part of the Progress NativeScript UI package.

```html
<Child v-view:parentPropertyName />
<!-- same as: -->
<Child ~parentPropertyName />
```

```html
<RadSideDrawer>
  <StackLayout v-view:drawerContent />
  <StackLayout v-view:mainContent />
</RadSideDrawer>
```

<DocExampleBox codeBox="https://codesandbox.io/s/0o9mjzy1k0">

```html

// ViewComponent
<StackLayout class="view-component-container">
  <StackLayout ref="leftContent" class="left-content"></StackLayout>
  <StackLayout ref="rightContent" class="right-content"></StackLayout>
  <slot />
</StackLayout>
// ViewComponent

<ViewComponent id="viewComponent">
  <StackLayout v-view:leftContent id="leftContentStack">
    <Label text="Left Content" />
  </StackLayout>
  <StackLayout v-view:rightContent>
    <Label text="Right Content" />
  </StackLayout>
</ViewComponent>
```

<ViewDirectiveDoc />
</DocExampleBox>

## References

For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/utilities/v-view/)
