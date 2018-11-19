<template>
  <StackLayout class="view-component-container">
    <StackLayout ref="leftContent" class="left-content"></StackLayout>
    <StackLayout ref="rightContent" class="right-content"></StackLayout>
    <slot />
  </StackLayout>
</template>

<script>
export default {
  name: "ViewComponentContainerDoc"
};
</script>

<style scoped>
.view-component-container {
  display: flex;
  flex-direction: row;
}
.left-content {
  height: auto;
  background-color: rgba(0, 0, 0, 0.3);
  flex: 0 0 200px;
}
.right-content {
  height: auto;
  background-color: #ccc;
  flex: 1;
}
</style>
