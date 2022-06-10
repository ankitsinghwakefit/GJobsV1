<template>
  <input
    v-model="value"
    type="text"
    class="w-full text-lg font-normal focus:outline-none"
    :placeholder="placeholder"
    @input="handleInput"
  />
</template>

<script>
export default {
  name: "TextInput",
  props: {
    placeholder: {
      type: String,
      required: false,
      default: "",
    },
  },
  emits: ["handleInput"],
  data() {
    return {
      value: null,
    };
  },
  methods: {
    handleInput() {
      this.$emit("handleInput", this.value);
    },
  },
};
</script>
