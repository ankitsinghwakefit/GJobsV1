<template>
    <Accordian heading="Organizations">
        <div>
          <fieldset>
            <ul class="flex flex-row flex-wrap">
              <li class="w-1/2 h-8" v-for="organization in UNIQUE_ORGANIZATIONS" :key="organization">
              <input type="checkbox" @change="filterOrganizations" v-model="selectedOrganizations" :value="organization" :id="organization" class="mr-3" />
              <label :for="organization">{{organization}}</label>
              </li>
            </ul>
          </fieldset>
        </div>
      </Accordian>
</template>

<script>
// import {mapGetters} from "vuex"
import Accordian from "@/components/Shared/Accordian.vue"
export default {
    name: "JobFilterSidebarOrganizations",
    components: {
        Accordian
    },
    data(){
      return {
        selectedOrganizations: []
      }
    },
    computed: {
      // ...mapGetters([UNIQUE_ORGANIZATIONS])
        UNIQUE_ORGANIZATIONS(){
            return this.$store.getters.UNIQUE_ORGANIZATIONS
        }
    },
    methods: {
      filterOrganizations(){
        this.$store.commit("ADD_SELETED_ORGANIZATIONS", this.selectedOrganizations)
      }
    }
}
</script>