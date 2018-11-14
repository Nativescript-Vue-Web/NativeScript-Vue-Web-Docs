<template>
    <SearchBar hint="Search hint" :text="searchPhrase"  @submit="onSubmit" />
</template>

<script>
import { SearchBar } from "nativescript-vue-web";

export default {
  name: "SearchBarDoc",
  data() {
    return {
      searchPhrase: ""
    };
  },
  components: {
    SearchBar
  },
  methods: {
    onSubmit() {
      alert("Searching...");
    }
  }
};
</script>
