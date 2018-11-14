# Frame

`<Frame>` is a UI component used to display `<Page>` elements.

> Multiple Frames

```html
<GridLayout columns="*, *">
  <Frame col="0"/>
  <Frame col="1"/>
</GridLayout>
```

> A frame with a default page

```html
<Frame>
  <Page>
    <ActionBar title="Default Page Title" />
    <GridLayout>
      <Label text="Default Page Content" />
    </GridLayout>
  </Page>
</Frame>
```

<DocExampleBox codeBox="https://codesandbox.io/s/yjmjyny5jx">

```html
<Frame col="0"  />
  <TextView v-model="textViewInput" :editable="true" />
  <Frame col="1" />
    <WebView src="<div><h1>Some static HTML</h1></div>" />
  <!--A frame with a default page -->
  <Frame>
    <Page>
      <ActionBar title="Default Page Title" />
      <GridLayout columns="*, *" rows="*, *">
        <Label text="Default Page Content" />
      </GridLayout>
    </Page>
</Frame>
```

```js
webViewLoadStarted(event) {
  console.log("WebView Loading Started");
},
webViewLoadFinished(event) {
  console.log("WebView Loading finished.");
},
```

<FrameDoc />
</DocExampleBox>

#### References

> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/components/frame/)
> or [NativeScript Documentation](https://docs.nativescript.org/api-reference/classes/_ui_frame_.frame)
