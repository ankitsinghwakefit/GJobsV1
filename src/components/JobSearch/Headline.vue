<template>
  <section class="mb-16">
    <h1 class="font-bold tracking-tighter text-8xl mb-14">
      <span :class="activeWord">{{ activeWords }}</span> for everyone
    </h1>
    <h2 class="text-3xl font-light">Find your next job at G-Careers</h2>
  </section>
</template>

<script>
export default {
  name: "Headline",
  data() {
    return {
      activeWord: "code",
      count: 0,
      words: ["code", "design", "build", "create"],
      // action: "Build",
      // interval: null,
    };
  },
  computed: {
    activeWords() {
      let len = this.activeWord.length;
      return this.activeWord[0].toUpperCase() + this.activeWord.slice(1, len);
    },
  },
  created() {
    this.callTimer();
    // this.changeTitle();
  },
  beforeMount() {
    // clearInterval(this.interval);
  },
  updated() {
    this.callTimer();
  },
  beforeUnmount() {
    // clearInterval(this.interval);
  },
  methods: {
    callTimer() {
      setTimeout(() => this.change(), 5000);
    },
    change() {
      this.count++;
      if (this.count === this.words.length) {
        this.count = 0;
      }
      this.activeWord = this.words[this.count];
    },
    // changeTitle(){
    //   this.interval = setInterval(() => {
    //   const actions = ["Code", "Design", "Build", "Create"]
    //   const currentActionsIndex = actions.indexOf(this.action)
    //   const nextActionsIndex = (currentActionsIndex + 1) % 4
    //   const nextAction = actions[nextActionsIndex]
    //   this.action = nextAction
    // },5000)
    // }
  },
};
</script>

<style scoped>
.build {
  color: #1a73e8;
}
.create {
  color: #34a853;
}
.design {
  color: #f9ab00;
}
.code {
  color: #d93025;
}
</style>
