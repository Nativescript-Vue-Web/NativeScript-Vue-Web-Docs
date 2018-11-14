<template>
  <Progress :value="currentProgress" @valueChange="progressChange" :maxValue="maxValueProgress" />
</template>

<script>
import { Progress } from "nativescript-vue-web";
export default {
  name: "ProgressDoc",
  components: { Progress },
  data() {
    return {
      currentProgress: 10,
      maxValueProgress: 70
    };
  },
  methods: {
    progressChange: function(newValue, oldValue) {
      alert("Progress Changed " + oldValue + " to " + newValue);
    },
    incrementValue() {
      this.currentProgress += 10;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
