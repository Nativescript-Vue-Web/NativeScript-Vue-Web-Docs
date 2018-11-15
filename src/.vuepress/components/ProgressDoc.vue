<template>
  <StackLayout class="progress">
    <Label text="Default Progress" />
    <Progress :value="currentProgress" @valueChange="progressChange" :maxValue="maxValueProgress" />
    <Button @tap="incrementValue" text="Increment" class="progress__button" />
  </StackLayout>
</template>

<script>
export default {
  name: "ProgressDoc",
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
.progress {
  &__button {
    width: 100px;
    margin-top: 20px;
  }
}
</style>
