<template>
  <main class="flex-auto p-8 bg-slate-100">
    <ol>
      <JobListing
        v-for="job in displayedJobs"
        :key="job.id"
        data-testid="job-listing-component"
        :job="job"
      />
    </ol>
    <div class="mt-8 mx-auto">
      <div class="flex flex-row flex-nowrap">
        <p class="text-sm flex-grow">Page {{ pageNumber }}</p>
      </div>
    </div>
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
  computed: {
    displayedJobs() {
      const page = this.$route.query.page || "1";
      const pageNumber = Number.parseInt(page);
      const startingPage = (pageNumber - 1) * 10;
      const endingPage = pageNumber * 10;
      return this.jobs.slice(startingPage, endingPage);
    },
    pageNumber() {
      return Number.parseInt(this.$route.query.page || "1");
    },
  },
  async mounted() {
    try {
      const response = await axios.get("http://localhost:3000/jobs");
      this.jobs = response.data;
    } catch {
      (err) => new Error(err);
    }
  },
  methods: {
    handleNext() {},
  },
};
</script>
