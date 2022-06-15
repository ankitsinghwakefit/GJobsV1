<template>
  <div class="accordion-container" @click="toggleAccordian">
    <div>Accordian</div>
    <div class="svg-container">
      <AngleUp v-if="!openAccordianPanel" /> <AngleDown v-else />
    </div>
  </div>
  <div v-if="openAccordianPanel">child</div>
</template>

<script>
import AngleUp from "@/assets/svg/AngleUp.vue";
import AngleDown from "@/assets/svg/AngleDown.vue";

export default {
  name: "Accordian",
  components: {
    AngleUp,
    AngleDown,
  },
  data() {
    return {
      openAccordianPanel: false,
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
  padding-top: 10px;
  padding-bottom: 10px;
}
.svg-container {
  width: 20px;
}
</style>
