<template>
  <StackLayout>
    <ListPicker v-model="selectedIndex" :items="listOfItems" @selectedIndexChange="selectedIndexChanged" />
  </StackLayout>
</template>

<script>
import { listPicker, StackLayout } from "nativescript-vue-web";
export default {
  name: "listPickerDoc",
  components: { listPicker, StackLayout },
  data() {
    return {
      selectedIndex: 1,
      listOfItems: [
        "Yiğit",
        "Tümay",
        "Özer",
        "Gizem",
        "Muammer",
        "Efe",
        "Osman",
        "Ercan"
      ]
    };
  },
  methods: {
    selectedIndexChanged(event) {
      console.log("index changed", this.selectedIndex);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

