<template>
    <Slider :value="80" @valueChange="onValueChanged" />
</template>
 
<script>
import { Slider } from "nativescript-vue-web";
export default {
  name: "SliderDoc",
  components: { Slider },
  methods:{
    onValueChanged(){
      alert("Value changed!");
    }
  }
};
</script>

