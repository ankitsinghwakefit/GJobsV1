<template>
  <button class="px-5 py-3 font-medium border-0 rounded" :class="buttonClass">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    text: {
      default: "Sign In",
      required: true,
      type: String,
    },
    type: {
      type: String,
      required: true,
      default: "primary",
      validator(value) {
        return ["primary", "secondary"].includes(value);
      },
    },
  },
  computed: {
    buttonClass() {
      return this.type;
    },
  },
};
</script>

<style scoped>
.primary {
  @apply bg-white text-brand-blue-1;
}
.secondary {
  @apply bg-brand-blue-1 text-white;
}
.tirtery {
  @apply bg-brand-green-1 text-white;
}
</style>
