<template>
  <StackLayout>
    <Button text="Show Confirm Dialog" width="200" @tap="showConfirmDialog" />
  </StackLayout>
</template>

<script>
import { Button, StackLayout } from "nativescript-vue-web";

export default {
  name: "ConfrimDialogDoc",
  methods: {
    showConfirmDialog: function() {
      confirm("Your title", "Your message", "OK", "Cancel").then(() => {
      });
    }
  },
  components: {
    Button,
    StackLayout
  }
};
</script>

