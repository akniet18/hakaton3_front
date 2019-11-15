<template>
  <div class="wrapper">
    <HeaderApp></HeaderApp>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderApp from './header'
export default {
  components: {
    HeaderApp
  }
};
</script>

<style scoped>

</style>
