<template>
  <div class="fixed w-full h-16 bg-white">
    <div
      class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
    >
      <a href="" data-testid="logo" class="flex items-center h-full text-xl"
        >{{ totalJobs }} Total Jobs Matched</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Subnav",
  data() {
    return {
      totalJobs: 80,
    };
  },
};
</script>
