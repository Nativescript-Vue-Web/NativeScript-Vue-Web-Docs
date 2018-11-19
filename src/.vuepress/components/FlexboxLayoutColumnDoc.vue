<template>
  <FlexboxLayout class="flexbox" flexDirection="column" backgroundColor="#3c495e">
    <Label text="first" height="70" backgroundColor="#43b883"/>
    <Label text="second" height="70" backgroundColor="#1c6b48"/>
    <Label text="third" height="70" backgroundColor="#289062"/>
  </FlexboxLayout>
</template>

<script>
export default {
  name: "FlexboxLayoutColumnDoc"
};
</script>

<style lang="scss" scoped>
.flexbox {
  color: #2c3e50;
}
</style>
