import { createStore } from "vuex";
import getJobs from "@/api/getJobs";

export default createStore({
  state: {
    isLoggedIn: false,
    jobs: [],
    selectedOrganizations: [],
  },
  getters: {
    UNIQUE_ORGANIZATIONS(state){
      const uniqueOrganizations = new Set()
      state.jobs.forEach(job=>uniqueOrganizations.add(job.organization))
      return uniqueOrganizations
    },
    FILTER_JOBS_BY_ORGANIZATIONS(state){
      if(state.selectedOrganizations.length){
        return state.jobs.filter(job=> state.selectedOrganizations.includes(job.organization))
      }
      return state.jobs
    }
  },
  mutations: {
    LOGIN_USER(state) {
      state.isLoggedIn = true;
    },
    RECEIVE_JOBS(state, jobs) {
      state.jobs = jobs;
    },
    ADD_SELETED_ORGANIZATIONS(state,payload){
      state.selectedOrganizations = payload
    }
  },
  actions: {
    FETCH_JOBS: async (context) => {
      const jobListings = await getJobs();
      context.commit("RECEIVE_JOBS", jobListings);
    },
  },
  modules: {},
});
