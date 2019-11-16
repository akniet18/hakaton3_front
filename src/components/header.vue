<template>
  <div class="wrapper">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
          <router-link tag="a" class="navbar-brand" :to="{name: 'home'}">
            ABC
          </router-link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
<!--               <li class="nav-item">
                <router-link tag="a" class="nav-item" :to="{name: 'login'}" v-if="token !== 'undefined'">Добавить отзыв</router-link>
                <router-link tag="a" class="nav-item" :to="{name: 'login'}" v-if="token !== 'undefined'">Добавить отзыв</router-link>
              </li> -->
            
              <li class="nav-item" v-if="token !== 'undefined'">{{username}} {{token}}</li>
              <li class="nav-item" v-else>
                <router-link tag="el-button" :to="{name: 'login'}">Sign in</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: localStorage.getItem('username'),
      token: localStorage.getItem('token')
    }
  }
};
</script>

<style scoped>
</style>
