<template>
    <TextField :text="textFieldValue" hint="Enter text..." />
</template>
 
<script>
import { TextField } from "nativescript-vue-web";
export default {
  name: "TextFieldDoc",
  components: { TextField }
};
</script>

