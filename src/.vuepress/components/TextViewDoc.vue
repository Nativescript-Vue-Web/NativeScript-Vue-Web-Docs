<template>
    <TextView v-model="textViewInput"  :editable=true />
</template>
 
<script>
import { TextView } from "nativescript-vue-web";
export default {
  name: "TextViewDoc",
  components: { TextView }
};
</script>

