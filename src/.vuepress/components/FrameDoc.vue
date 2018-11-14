<template>
  <StackLayout>
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
  </StackLayout>
</template>

<script>
import {
  Frame,
  WebView,
  TextView,
  ActionBar,
  GridLayout,
  Label,
  StackLayout,
  Page
} from "nativescript-vue-web";
export default {
  name: "FrameDoc",
  data() {
    return {
      textViewInput: "default \n value"
    };
  },
  components: {
    Frame,
    WebView,
    TextView,
    ActionBar,
    GridLayout,
    Label,
    StackLayout,
    Page
  },
  methods: {
    webViewLoadStarted(event) {
      console.log("WebView Loading Started");
    },
    webViewLoadFinished(event) {
      console.log("WebView Loading finished.");
    }
  }
};
</script>

<style scoped type="scss">
.page{
    padding-left:0
}
</style>
