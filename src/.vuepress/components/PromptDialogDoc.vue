<template>
  <StackLayout>
    <Button text="Show Prompt Dialog" width="200" @tap="showPromptDialog" />
  </StackLayout>
</template>

<script>
import { Button, StackLayout } from "nativescript-vue-web";

export default {
  name: "PromptDialogDoc",
  methods: {
    showPromptDialog: function() {
      prompt(
        "Your message to the user",
        "Suggested user input",
        "OK",
        "Cancel"
      ).then(result => {
        if (result) {
          console.log('Entered Text:', result.value);
        }
      });
    }
  },
  components: {
    Button,
    StackLayout
  }
};
</script>

