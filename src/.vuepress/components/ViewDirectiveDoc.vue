<template>
  <ViewComponent id="viewComponent">
    <StackLayout v-view:leftContent id="leftContentStack">
      <Label text="Left Content" />
    </StackLayout>
    <StackLayout v-view:rightContent>
      <Label text="Right Content" />
    </StackLayout>
  </ViewComponent>
</template>

<script>
import ViewComponentContainerDoc from "./ViewDirectiveContainerDoc";

export default {
  name: "ViewDirectiveDoc",
  components: {
    ViewComponent: ViewComponentContainerDoc
  }
};
</script>

<style scoped>
</style>
