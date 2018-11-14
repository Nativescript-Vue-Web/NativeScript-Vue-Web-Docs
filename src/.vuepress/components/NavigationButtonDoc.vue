<template>
    <ActionBar title="My App">
        <NavigationButton text="Go back" @tap="goBack" webIcon="fa fa-arrow-left" />
    </ActionBar>
</template>
 
<script>
import { ActionBar, NavigationButton } from "nativescript-vue-web";
export default {
  name: "NavigationButtonDoc",
  components: { ActionBar, NavigationButton },
  methods: {
    goBack() {
      alert("goBack");
    }
  }
};
</script>

<style scoped lang="scss">
@font-face {
  font-family: "FontAwesome";
  src: url("/fonts/fontawesome-webfont.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
.fa {
  font-family: "FontAwesome";
}
.fa-arrow-left:before {
  content: "\f060";
}
</style>
