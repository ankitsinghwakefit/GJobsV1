<template>
  <main>
    <section class="flex flex-col h-screen pt-10 pb-20 bg-yellow-200">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1"></div>
        <div class="col-start-2 col-span-5">
          <headline />
          <JobSearchForm />
        </div>
        <div class="col-start-7 col-span-5 self-center justify-self-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
            class="w-80 h-80 object-contain"
          />
        </div>
        <div class="col-start-12 col-span-1"></div>
      </div>
    </section>
    <Spotlight #default="slotProps">
      <h1>{{slotProps.spotlight.title}}</h1>
      <h3>{{slotProps.spotlight.description}}</h3>
    </Spotlight>
  </main>
</template>

<script>
import Spotlight from "@/components/Shared/Spotlight.vue"
import Headline from "@/components/JobSearch/Headline.vue";
import JobSearchForm from "@/components/JobSearch/JobSearchForm.vue";
export default {
  name: "Hero",
  components: {
    Headline,
    JobSearchForm,
    Spotlight
  },
};
</script>
