<template>
  <StackLayout>
    <Button text="Button" @tap="onButtonTap" horizontalAlignment="center" />
  </StackLayout>
</template>

<script>
export default {
  name: "ButtonDoc",
  methods: {
    onButtonTap() {
      console.log("clicked");
    }
  }
};
</script>

