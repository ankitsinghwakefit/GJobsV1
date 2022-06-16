<template>
  <div class="border-b-2">
    <div class="accordion-container" @click="toggleAccordian">
      <div>Organizations</div>
      <div class="svg-container">
        <AngleUp v-if="!openAccordianPanel" /> <AngleDown v-else />
      </div>
    </div>
    <div v-if="openAccordianPanel" class="checkbox-container">
      <input v-model="checkedNames" type="checkbox" value="Fitbit" />
      <label for="Fitbit">Fitbit</label>
      <input v-model="checkedNames" type="checkbox" value="Google" />
      <label for="Google">Google</label><br />
      <input v-model="checkedNames" type="checkbox" value="Loon" />
      <label for="Loon">Loon</label>
      <input v-model="checkedNames" type="checkbox" value="Wing" />
      <label for="Wing">Wing</label><br />
      <input v-model="checkedNames" type="checkbox" value="Youtube" />
      <label for="Youtube">Youtube</label>
    </div>
  </div>
</template>

<script>
import AngleUp from "@/assets/svg/AngleUp.vue";
import AngleDown from "@/assets/svg/AngleDown.vue";

export default {
  name: "Organizations",
  components: {
    AngleUp,
    AngleDown,
  },
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
