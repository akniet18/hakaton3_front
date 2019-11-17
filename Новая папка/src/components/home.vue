<template>
  <div class="wrapper">
    <HeaderApp></HeaderApp>
    <!-- <SearchApp v-if="route !== 'user'"></SearchApp> -->
    
    <router-view></router-view>
    <FooterApp></FooterApp>
  </div>
</template>

<script>
import HeaderApp from './header'
import FooterApp from './footer'
import SearchApp from './search'
export default {
  components: {
    HeaderApp,
    FooterApp,
    SearchApp
  },
  data() {
  	return {
  		route: this.$route.name
  	}
  },
  created() {
  	console.log(this.route)
  }
};
</script>

<style scoped>

</style>
