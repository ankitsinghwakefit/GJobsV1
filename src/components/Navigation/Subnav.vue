<template>
  <div class="w-full h-16 bg-white border-b border-solid border-brand-gray-1">
    <div v-if="onJobsSearchPage" class="flex items-center h-full px-8">
      <Search />
      <span data-testid="jobs-matched-statement"
        ><span data-testid="jobs-count" class="text-brand-green-1">{{
          totalJobs
        }}</span>
        jobs matched</span
      >
    </div>
  </div>
</template>

<script>
import Search from "@/assets/svg/Search.vue";
export default {
  name: "Subnav",
  components: {
    Search,
  },
  data() {
    return {
      totalJobs: 1280,
      onJobsSearchPage: true,
    };
  },
};
</script>
