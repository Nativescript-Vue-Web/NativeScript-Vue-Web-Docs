<template>
<StackLayout class="container" orientation="horizontal" backgroundColor="#3c495e">
        <Label text="first" width="70" backgroundColor="#43b883"/>
        <Label text="second" width="70" backgroundColor="#289062"/>
        <Label text="third" width="70" backgroundColor="#1c6b48"/>
    </StackLayout>

</template>

<script>
import { StackLayout, Label } from "nativescript-vue-web";
export default {
  name: "StackLayoutHorizontalDoc",
  components: { StackLayout }
};
</script>

<style scoped lang="scss">
.container {
  width:100%;
  height: 100%;
  min-height:300px
}
</style>
