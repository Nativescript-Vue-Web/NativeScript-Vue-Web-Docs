<template>
<StackLayout class="stack" orientation="horizontal" backgroundColor="#3c495e">
        <Label text="first" width="70" backgroundColor="#43b883"/>
        <Label text="second" width="70" backgroundColor="#289062"/>
        <Label text="third" width="70" backgroundColor="#1c6b48"/>
    </StackLayout>

</template>

<script>
export default {
  name: "StackLayoutHorizontalDoc"
};
</script>

<style lang="scss" scoped>
.stack {
  width: 100%;
  height: 100%;
  min-height: 300px;
}
</style>
