<template>
    <Switcher
      v-model="value"
      @checkedChange="switchValueChange"
    />
</template>

<script>
export default {
  name: "SwitchDoc",
  data() {
    return {
      value: true
    };
  },
  methods: {
    switchValueChange: event => console.log(event)
  }
};
</script>
