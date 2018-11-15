<template>
    <TextField
      v-model="textFieldInput"
      @textChange="textFieldOnChange"
      @input="textFieldOnInput"
      @focus="textFieldOnFocus"
      @blur="textFieldOnBlur"
      @returnPress="textFieldOnReturnPress"
      :editable="true"
      keyboardType="email"
    />
</template>

<script>
export default {
  name: "TextFieldDoc",
  data() {
    return {
      textFieldInput: ""
    };
  },
  methods: {
    textFieldOnChange: event => console.log("Change event :", event),
    textFieldOnInput: event => console.log("Input event :", event),
    textFieldOnFocus: event => console.log("Focus event :", event),
    textFieldOnBlur: event => console.log("Blur event :", event),
    textFieldOnReturnPress: event => console.log("Return Press event :", event)
  }
};
</script>
