<template>
    <ListPicker class="listpicker" v-model="selectedIndex" :items="listOfItems" @selectedIndexChange="selectedIndexChanged" />
</template>

<script>
export default {
  name: "listPickerDoc",
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
