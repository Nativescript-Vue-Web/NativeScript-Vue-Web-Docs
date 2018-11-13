<template>
  <FlexboxLayout class="container" backgroundColor="#3c495e">
    <Label text="first" width="70" backgroundColor="#43b883"/>
    <Label text="second" width="70" backgroundColor="#1c6b48"/>
    <Label text="third" width="70" backgroundColor="#289062"/>
  </FlexboxLayout>
</template>

<script>
import {FlexboxLayout, Label} from "nativescript-vue-web";
export default {
  name: "FlexboxLayoutDoc",
  components: { FlexboxLayout, Label }
};
</script>

<style lang="scss">
.container {
  color: #2c3e50;
  margin-top: 60px;
}
</style>
