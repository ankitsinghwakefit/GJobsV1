import { createStore } from "vuex";
import getJobs from "@/api/getJobs";

export default createStore({
  state: {
    isLoggedIn: false,
    jobs: [],
  },
  getters: {},
  mutations: {
    LOGIN_USER(state) {
      state.isLoggedIn = true;
    },
    RECEIVE_JOBS(state, jobs) {
      state.jobs = jobs;
    },
  },
  actions: {
    FETCH_JOBS: async (context) => {
      const jobListings = await getJobs();
      context.commit("RECEIVE_JOBS", jobListings);
    },
  },
  modules: {},
});
