<template>
  <Slider :value="80" @valueChange="onValueChanged" />
</template>
 
<script>
import { Slider } from "nativescript-vue-web";
export default {
  name: "SliderDoc",
  components: { Slider },
  data() {
    return {
      value: 70
    };
  },
  methods: {
    onValueChanged() {
      alert("Value changed!");
    }
  }
};
</script>

