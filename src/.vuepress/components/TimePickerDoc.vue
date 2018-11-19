<template>
    <TimePicker :hour="selectedHour" :minute="selectedMinute" />
</template>

<script>
export default {
  name: "TimePickerDoc",
  data() {
    return {
      selectedHour: 5,
      selectedMinute: 20
    };
  }
};
</script>
