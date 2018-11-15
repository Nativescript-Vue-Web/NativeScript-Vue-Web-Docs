<template>
  <StackLayout>
    <Button text="Show Confirm Dialog" width="200" @tap="showConfirmDialog" />
  </StackLayout>
</template>

<script>
export default {
  name: "ConfrimDialogDoc",
  methods: {
    showConfirmDialog: function() {
      confirm("Your title", "Your message", "OK", "Cancel").then(() => {});
    }
  }
};
</script>
