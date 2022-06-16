<template>
  <div
    class="flex flex-col p-4 bg-white border-r border-solid border-brand-gray-1 w-96"
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <ActionButton text="Clear filters" type="secondary" />
        </div>
      </div>
      <Degree @degreeFilter="handleFilter" />
      <JobTypes />
      <Organizations />
    </section>
  </div>
</template>

<script>
import Degree from "@/components/Shared/Degree.vue";
import JobTypes from "@/components/Shared/JobTypes.vue";
import Organizations from "@/components/Shared/Organizations.vue";
import ActionButton from "@/components/Shared/ActionButton.vue";
export default {
  name: "JobFilterSidebar",
  components: {
    ActionButton,
    Degree,
    JobTypes,
    Organizations,
  },
  methods: {
    handleFilter(value) {
      console.log("degree", value);
    },
  },
};
</script>
