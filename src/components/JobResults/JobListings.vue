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
        <p class="text-sm flex-grow" data-testid="current-page-number">
          Page {{ currentPageNumber }}
        </p>
        <router-link
          v-if="perviousPage"
          data-testid="previous-page-link"
          :to="previousPageLink"
          class="mr-2 text-blue-500"
          >Previous Page</router-link
        >
        <!-- :to="{name="jobsResults", query={page: previousPage}}" -->
        <router-link
          v-if="nextPage"
          data-testid="next-page-link"
          :to="nextPageLink"
          class="ml-2 text-blue-500"
          >Next Page</router-link
        >
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
    currentPageNumber() {
      return Number.parseInt(this.$route.query.page || "1");
    },
    nextPage() {
      let totalPages = this.jobs.length / 10;
      return this.currentPageNumber < totalPages
        ? this.currentPageNumber + 1
        : null;
    },
    perviousPage() {
      return this.currentPageNumber > 1 ? this.currentPageNumber - 1 : null;
    },
    nextPageLink() {
      return `/jobs/results/?page=${this.currentPageNumber + 1}`;
    },
    previousPageLink() {
      return `/jobs/results/?page=${this.currentPageNumber - 1}`;
    },
  },
  async mounted() {
    try {
      const response = await axios.get(`${process.env.VUE_APP_API_URL}/jobs`);
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
