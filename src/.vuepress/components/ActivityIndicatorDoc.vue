<template>
  <StackLayout class="activityindicator">
    <Button class="activityindicator__button" text="Change State" @tap="changeState" horizontalAlignment="center"></Button>
    <ActivityIndicator :busy="busy" @busyChange="onBusyChanged"  horizontalAlignment="center"/>
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
.activityindicator {
  &__button {
    width: 100px;
    margin-bottom: 50px;
  }
}
</style>

