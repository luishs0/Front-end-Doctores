<!-- script section -->
<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  // name
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<!-- template section -->
<template>
  <!-- header -->
  <AppHeader />
  <router-view />
  <AppFooter />
</template>

<!-- style section -->
<style lang="scss">
@use "./styles/general.scss" as *;
</style>
