<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <a
          :href="url"
          data-testid="logo"
          class="flex items-center h-full text-xl"
          >{{ company }}</a
        >
        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              v-for="(menu, index) in menuItems"
              :key="index"
              class="h-full ml-9"
              data-testid="nav-menu-items-list"
            >
              <a href="" class="flex items-center h-full py-2.5">
                {{ menu }}
              </a>
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
    </div>
  </header>
</template>

<script>
import ActionButton from "@/components/ActionButton.vue";
import ProfileImage from "@/components/ProfileImage.vue";
export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
  },
  data() {
    return {
      company: "G Careers",
      url: "https://google.com",
      menuItems: [
        "Teams",
        "Locations",
        "Life at G Careers",
        "Students",
        "Jobs",
      ],
      loggedin: false,
    };
  },
  methods: {
    toggleProfile() {
      this.loggedin = !this.loggedin;
    },
  },
};
</script>
