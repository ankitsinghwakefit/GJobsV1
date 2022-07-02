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
      <Accordian heading="Job Types">
        <div>
          <fieldset>
            <ul class="flex flex-row flex-wrap">
              <li class="w-1/2 h-8">
              <input type="checkbox" id="VueTube" class="mr-3" />
              <label for="VueTube">VueTube</label>
              </li>
            </ul>
          </fieldset>
        </div>
      </Accordian>
      <Accordian heading="Degree">
        <div>
          <fieldset>
            <ul class="flex flex-row flex-wrap">
              <li class="w-1/2 h-8">
              <input type="checkbox" id="VueTube" class="mr-3" />
              <label for="VueTube">VueTube</label>
              </li>
            </ul>
          </fieldset>
        </div>
      </Accordian>
      <JobFilterSidebarOrganizations />
      <!-- <Degree @degreeFilter="handleFilter" />
      <JobTypes />
      <Organizations /> -->
    </section>
  </div>
</template>

<script>
// import axios from "axios"
import {mapState} from "vuex"
import Accordian from "@/components/Shared/Accordian.vue"
import JobFilterSidebarOrganizations from "@/components/JobResults/JobFilterSidebar/JobFilterSidebarOrganizations.vue"
// import Degree from "@/components/Shared/Degree.vue";
// import JobTypes from "@/components/Shared/JobTypes.vue";
// import Organizations from "@/components/Shared/Organizations.vue";
import ActionButton from "@/components/Shared/ActionButton.vue";
export default {
  name: "JobFilterSidebar",
  components: {
    ActionButton,
    JobFilterSidebarOrganizations,
    // Degree,
    // JobTypes,
    // Organizations,
    Accordian
  },
  computed: {
    ...mapState({
      jobs: (state) => state.jobs,
    })
    // jobTypes(){
    //   let jobTypesData = this.jobs.filter((index,job)=>{
    //     console.log(job[index])
    //     // return job[index].jobType
    //   })
    //   return jobTypesData
    // }
  },
  // async mounted(){
  //   let jobTypesData = await axios.get("http://localhost:3000/jobs")
  //   // console.log("jobs", this.jobs)
  //   let jobTypesData1 = jobTypesData.data.filter((currentValue, index, arr)=>{
  //       console.log("jb",currentValue,arr)
  //       // console.log("filter",arry[job].jobType)
  //       // return arry[job].jobType
  //     })
  //     console.log("jobTypesData",jobTypesData.data)
  //     console.log("jobTypesData1", jobTypesData1)
  // },
  methods: {
    handleFilter(value) {
      console.log("degree", value);
    },
  },
};
</script>
