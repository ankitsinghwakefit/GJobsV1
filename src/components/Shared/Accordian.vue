<template>
  <div class="border-b-2">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Accordian",
  data() {
    return {
      openAccordianPanel: false,
      checkedNames: [],
    };
  },
  methods: {
    toggleAccordian() {
      this.openAccordianPanel = !this.openAccordianPanel;
    },
  },
};
</script>

<style scoped>
.accordion-container {
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;
  /* border-bottom: 1px solid #eee; */
}
.svg-container {
  width: 20px;
}
.checkbox-container {
  padding-top: 15px;
  padding-bottom: 15px;
}
input {
  margin: 0 8px;
  /* font-size: 28px; */
  width: 15px;
  height: 15px;
}
label {
  margin: 0 2px;
  font-size: 20px;
}
</style>
