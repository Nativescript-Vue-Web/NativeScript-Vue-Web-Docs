<template>
  <StackLayout>
    <Button text="Show Action Dialog" width="200" @tap="showActionDialog" />
  </StackLayout>
</template>

<script>
import { Button, StackLayout } from "nativescript-vue-web";
export default {
  name: "AbsoluteLayoutDoc",
  components: { Button, StackLayout },
  methods: {
    showActionDialog: function() {
      action("Your message", "Cancel button text", ["Option1", "Option2"]).then(
        result => {
          console.log(result);
        }
      );
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

