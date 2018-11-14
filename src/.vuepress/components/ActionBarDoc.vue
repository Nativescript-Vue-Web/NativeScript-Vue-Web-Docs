<template>
  <StackLayout >
    <ActionBar title="My App">
      <ActionItem @tap="onTapShare"
        ios.systemIcon="9" ios.position="left"
        android.systemIcon="ic_menu_share" android.position="actionBar" webIcon="fa fa-share" />
      <ActionItem @tap="onTapDelete"
        ios.systemIcon="16" ios.position="right"
        text="delete" android.position="popup" webIcon="fa fa-remove" />
    </ActionBar>
    <ActionBar style="margin-top:15px">
      <StackLayout orientation="horizontal">
        <Label text="NativeScript" verticalAlignment="center" />
        <Label text="Vue Web" verticalAlignment="center" />
      </StackLayout>
    </ActionBar>
  </StackLayout>
</template>

<script>
import {
  ActionBar,
  ActionItem,
  Label,
  StackLayout
} from "nativescript-vue-web";

export default {
  name: "ActionBarDoc",
  components: {
    ActionBar,
    ActionItem,
    Label,
    StackLayout
  },
  methods: {
    onTapShare() {
      alert("shared");
    },
    onTapDelete() {
      alert("deleted");
    }
  }
};
</script>

<style>
@font-face {
  font-family: "FontAwesome";
  src: url("../public/fonts/fontawesome-webfont.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

.fa {
  font-family: "FontAwesome";
}

.fa-share:before {
  content: "\f064";
}

.fa-remove:before {
  content: "\f00d";
}
</style>
