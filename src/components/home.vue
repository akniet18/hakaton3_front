<template>
  <div class="wrapper">
    <HeaderApp></HeaderApp>
    <router-view></router-view>
    <FooterApp></FooterApp>
  </div>
</template>

<script>
import HeaderApp from './header'
import FooterApp from './footer'
export default {
  components: {
    HeaderApp,
    FooterApp
  }
};
</script>

<style scoped>

</style>
