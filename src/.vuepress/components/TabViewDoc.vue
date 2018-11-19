<template>
    <TabView class="container" :selectedIndex="selectedIndex" @selectedIndexChanged="changed">
        <TabViewItem title="Tab 1" webIcon="fa fa-eye">
            <StackLayout>
                <Label text="Content for Tab 1"/>
            </StackLayout>
        </TabViewItem>
        <TabViewItem title="Tab 2">
            <Label text="Content for Tab 2"/>
        </TabViewItem>
        <TabViewItem title="Tab 3">
            <Label text="Content for Tab 3"/>
        </TabViewItem>
    </TabView>
</template>

<script>
export default {
  name: "TabViewDoc",
  data() {
    return {
      selectedIndex: 0
    };
  },
  methods: {
    changed: index => console.log("selectedIndexChanged", index) // eslint-disable-line
  }
};
</script>

<style scoped lang="scss">
.container {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  height: 100%;
  flex: 1;
}
</style>
