<template>
  <StackLayout>
    <Button text="Button" @tap="onButtonTap" horizontalAlignment="center" />
  </StackLayout>
</template>

<script>
import { Button, StackLayout } from "nativescript-vue-web";
export default {
  name: "ButtonDoc",
  components: { Button, StackLayout },
  methods: {
    onButtonTap() {
      console.log("clicked");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

