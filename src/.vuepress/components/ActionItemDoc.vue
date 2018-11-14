<template>
    <ActionBar title="My App">
      <ActionItem @tap="onTapShare"
        ios.systemIcon="9" ios.position="left"
        android.systemIcon="ic_menu_share" android.position="actionBar" webIcon="fa fa-share" />
      <ActionItem @tap="onTapDelete"
        ios.systemIcon="16" ios.position="right"
        text="delete" android.position="popup" webIcon="fa fa-remove" />
    </ActionBar>
</template>

<script>
import { ActionBar, ActionItem, Label } from "nativescript-vue-web";

export default {
  name: "app",
  components: {
    ActionBar,
    ActionItem,
    Label
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

<style lang="scss">
body {
  text-align: center;
  background-color: #ebebeb;
}
#app {
  width: 100%;
}

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
