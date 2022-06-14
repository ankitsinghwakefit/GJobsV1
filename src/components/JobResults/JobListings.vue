<template>
  <main class="flex-auto p-8 bg-slate-100">
    <ol>
      <JobListing v-for="job in jobs" :key="job.id" :job="job" />
    </ol>
  </main>
</template>

<script>
import axios from "axios";
import JobListing from "@/components/JobResults/JobListing.vue";
export default {
  name: "JobListings",
  components: {
    JobListing,
  },
  data() {
    return {
      jobs: [],
    };
  },
  async mounted() {
    try {
      const response = await axios.get("http://localhost:3000/jobs");
      this.jobs = response.data;
    } catch {
      (err) => new Error(err);
    }
  },
};
</script>
