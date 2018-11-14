<template>
  <StackLayout>
    <Button text="Show Alert Dialog" width="200" @tap="showAlertDialog" />
  </StackLayout>
</template>

<script>
import { Button, StackLayout } from "nativescript-vue-web";
export default {
  name: "AlertDialogDoc",
  components: { Button, StackLayout },
  methods: {
    showAlertDialog: function() {
      alert("Your title", "Your message", "OK").then(() => {
        console.log("Alert dialog closed.");
      });
    }
  }
};
</script>

