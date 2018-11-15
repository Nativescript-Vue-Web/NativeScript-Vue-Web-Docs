<template>
    <SearchBar hint="Search hint" :text="searchPhrase"  @submit="onSubmit" />
</template>

<script>
export default {
  name: "SearchBarDoc",
  data() {
    return {
      searchPhrase: ""
    };
  },
  methods: {
    onSubmit() {
      alert("Searching...");
    }
  }
};
</script>
