<template>
  <Slider :value="80" @valueChange="onValueChanged" />
</template>

<script>
export default {
  name: "SliderDoc",
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
