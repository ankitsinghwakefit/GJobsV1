<template>
  <header class="w-full text-sm" :class="addHeightInNav">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <router-link
          to="/"
          data-testid="logo"
          class="flex items-center h-full text-xl"
          >{{ company }}</router-link
        >
        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              v-for="(menu, index) in menuItems"
              :key="index"
              class="h-full ml-9"
              data-testid="nav-menu-items-list"
            >
              <router-link
                :to="menu.url"
                class="flex items-center h-full py-2.5"
              >
                {{ menu.text }}
              </router-link>
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <action-button
            v-if="!loggedin"
            data-testid="action-button-component"
            text="SignIn"
            type="secondary"
            @click="toggleProfile"
          />
          <profile-image
            v-else
            data-testid="profile-image-component"
            @click="toggleProfile"
          />
        </div>
      </div>
      <Subnav v-if="loggedin" />
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";
import ActionButton from "@/components/Shared/ActionButton.vue";
import ProfileImage from "@/components/Navigation/ProfileImage.vue";
import Subnav from "@/components/Navigation/Subnav.vue";

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    Subnav,
  },
  data() {
    return {
      company: "G Careers",
      url: "https://google.com",
      menuItems: [
        { text: "Teams", url: "/teams" },
        { text: "Locations", url: "/jobs/results" },
        { text: "Life at G Careers", url: "/jobs/results" },
        { text: "Students", url: "/jobs/results" },
        { text: "Jobs", url: "/jobs/results" },
      ],
    };
  },
  computed: {
    addHeightInNav() {
      return {
        "h-16": !this.loggedin,
        "h-32": this.loggedin,
      };
    },
    isJobsSearchPage() {
      return this.$route.path === "/jobs/results";
    },
    // loggedin() {
    //   return this.$store.state.isLoggedIn;
    // },
    ...mapState({
      loggedin: (state) => state.isLoggedIn,
    }),
  },
  methods: {
    toggleProfile() {
      this.$store.commit("LOGIN_USER");
    },
  },
};
</script>
