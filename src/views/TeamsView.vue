<template>
  <div class="flex flex-row flex-nowrap w-full">
    <HeaderContainer>
        <template #title>
            <h1 class="w-full text-4xl font-normal">Teams</h1>
        </template>
        <template #subtitle>
            <p>Paragraph</p>
        </template>
    </HeaderContainer>
  </div>
</template>

<script>
import HeaderContainer from "@/components/Shared/HeaderContainer.vue";
export default {
  name: "TeamsView",
  components: {
    HeaderContainer
  },
};
</script>
