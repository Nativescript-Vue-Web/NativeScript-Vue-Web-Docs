<template>
  <StackLayout>
    <Button text="Show Alert Dialog" width="200" @tap="showAlertDialog" />
  </StackLayout>
</template>

<script>
export default {
  name: "AlertDialogDoc",
  methods: {
    showAlertDialog: function() {
      alert("Your title", "Your message", "OK").then(() => {
        console.log("Alert dialog closed.");
      });
    }
  }
};
</script>

