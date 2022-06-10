<template>
  <form
    class="flex items-center w-full h-12 mt-14 border border-solid border-brand-gray-1 rounded-3xl bg-white"
  >
    <Search class="ml-4" />
    <div class="flex flex-nowrap flex-1 h-full text-base font-light">
      <div class="relative flex items-center flex-1 h-full pr-3">
        <lable class="absolute left-0 -top-10"> Role </lable>
        <TextInput
          placeholder="Software engineer"
          @handle-input="handleRoleData"
        />
      </div>

      <span
        class="flex items-center h-full px-3 border-l border-r border-brand-gray-1 bg-gray-500"
        >in</span
      >

      <div class="relative flex items-center flex-1 h-full pl-3">
        <lable class="absolute left-0 -top-10"> Where </lable>
        <TextInput placeholder="Delhi" @handle-input="handleLocationData" />
      </div>
    </div>
    <ActionButton
      text="Search"
      type="primary"
      class="rounded-r-3xl border-t border-r border-b border-brand-gray-1 py-2.5"
    />
  </form>
</template>

<script>
import TextInput from "@/components/Shared/TextInput.vue";
import Search from "@/assets/svg/Search.vue";
import ActionButton from "@/components/Shared/ActionButton.vue";
export default {
  name: "JobSearchForm",
  components: {
    Search,
    ActionButton,
    TextInput,
  },
  data() {
    return {
      location: null,
      role: null,
    };
  },
  methods: {
    handleRoleData(value) {
      this.role = value;
    },
    handleLocationData(value) {
      this.location = value;
    },
  },
};
</script>
