<template>
  <div>Job page {{ page }}</div>
</template>

<script>
export default {
  name: "JobView",
  computed: {
    page() {
      console.log("this", this.$route.query);

      return this.$route.query.role;
    },
  },
};
</script>
