<template>
    <WrapLayout height="300" width="450" orientation="vertical" backgroundColor="#3c495e">
        <Label text="first" class="wrapLayoutItem" backgroundColor="#43b883"/>
        <Label text="second" class="wrapLayoutItem" backgroundColor="#1c6b48"/>
        <Label text="third" class="wrapLayoutItem" backgroundColor="#289062"/>
        <Label text="fourth" class="wrapLayoutItem" backgroundColor="#289062"/>
    </WrapLayout>
</template>
 
<script>
import { WrapLayout } from "nativescript-vue-web";
export default {
  name: "WrapLayoutEqualColumnDoc",
  components: { WrapLayout }
};
</script>

<style scoped lang="scss">
.wrapLayoutItem {
  width: 140px;
  height: 140px;
}
</style>
