<template>
  <div class="border-b-2">
    <div class="accordion-container" @click="toggleAccordian">
      <div>Degree</div>
      <div class="svg-container">
        <AngleUp v-if="!openAccordianPanel" /> <AngleDown v-else />
      </div>
    </div>
    <div
      v-if="openAccordianPanel"
      class="checkbox-container"
      @input="handleFilter"
    >
      <input v-model="checkedNames" type="checkbox" value="Assiociate" />
      <label for="assiociate">Assiociate</label>
      <input v-model="checkedNames" type="checkbox" value="Bachelor's" />
      <label for="bachelor's">Bachelor's</label><br />
      <input v-model="checkedNames" type="checkbox" value="Master's" />
      <label for="master's">Master's</label>
      <input v-model="checkedNames" type="checkbox" value="Ph.D." />
      <label for="ph.D.">Ph.D.</label><br />
      <input v-model="checkedNames" type="checkbox" value="Pursuing Degree" />
      <label for="Pursuing degree">Pursuing Degree</label>
    </div>
  </div>
</template>

<script>
import AngleUp from "@/assets/svg/AngleUp.vue";
import AngleDown from "@/assets/svg/AngleDown.vue";

export default {
  name: "Degree",
  components: {
    AngleUp,
    AngleDown,
  },
  emits: ["degreeFilter"],
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
    handleFilter() {
      this.$emit("degreeFilter", this.checkedNames);
      // console.log("degree", this.checkedNames);
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
