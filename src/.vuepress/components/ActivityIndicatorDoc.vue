<template>
  <StackLayout>
    <ActivityIndicator :busy="busy" @busyChange="onBusyChanged" />
    <Button text="Change State" @tap="changeState" class="button" ></Button>
  </StackLayout>
</template>

<script>
import { ActivityIndicator, StackLayout, Button } from "nativescript-vue-web";
export default {
  name: "ActivityIndicatorDoc",
  components: { ActivityIndicator, StackLayout, Button },
  data() {
    return {
      busy: true
    };
  },
  methods: {
    onBusyChanged(event) {
      console.log("Changed: ", event);
    },
    changeState() {
      this.busy = !this.busy;
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  width: 100px;
  margin-top: 50px;
}
</style>

