<template>
  <div class="flex flex-row flex-nowrap w-full">
    <JobFilterSidebarVue />
    <JobListings />
  </div>
</template>

<script>
import JobListings from "@/components/JobResults/JobListings.vue";
import JobFilterSidebarVue from "@/components/JobResults/JobFilterSidebar/JobFilterSidebar.vue";
export default {
  name: "JobResultsView",
  components: {
    JobFilterSidebarVue,
    JobListings,
  },
};
</script>
