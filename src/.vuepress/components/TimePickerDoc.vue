<template>
    <TimePicker :hour="selectedHour" :minute="selectedMinute" />
</template>
 
<script>
import { TimePicker } from "nativescript-vue-web";
export default {
  name: "TimePickerDoc",
  data() {
    return {
      selectedHour: 5,
      selectedMinute: 20
    };
  },
  components: { TimePicker }
};
</script>

