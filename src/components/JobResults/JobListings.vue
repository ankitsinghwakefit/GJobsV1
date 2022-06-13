<template>
  <main class="flex-auto p-8 bg-slate-100">
    <ol>
      <JobListing />
      <JobListing />
      <JobListing />
    </ol>
  </main>
</template>

<script>
import JobListing from "@/components/JobResults/JobsListing.vue";
export default {
  name: "JobListings",
  components: {
    JobListing,
  },
};
</script>
