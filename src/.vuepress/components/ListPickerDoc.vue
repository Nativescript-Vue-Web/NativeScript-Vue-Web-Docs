<template>
    <ListPicker class="listpicker" v-model="selectedIndex" :items="listOfItems" @selectedIndexChange="selectedIndexChanged" />
</template>

<script>
import { ListPicker, StackLayout } from "nativescript-vue-web";
export default {
  name: "listPickerDoc",
  components: { ListPicker, StackLayout },
  data() {
    return {
      selectedIndex: 0,
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
.listpicker {
width: 150px;
}
</style>

