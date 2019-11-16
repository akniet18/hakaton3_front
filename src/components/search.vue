<template>
  <div class="wrapper">
    <header class="bg-primary py-5 mb-5">
        <div class="container h-100">
          <div class="row h-100 align-items-center">
            <div class="col-lg-12">
              <h1 class="display-4 text-white mt-5 mb-2 text-center">Business Name or Tagline</h1>
              <div class="form-group has-search">
                <i class="el-icon-search form-control-feedback"></i>
                <input type="text" class="form-control" placeholder="Search"
                        v-on:keyup.enter="search_user" v-model="search">
              </div>
            </div>
          </div>
        </div>
    </header>
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    data(){
        return{
            search: '',
        }
    },
    methods: {
        search_user() {
            this.$router.push({name: 'list', params: {search_s: this.search}})
        }
    }
};
</script>

<style scoped>

.has-search .form-control {
    padding-left: 2.375rem;
}

.has-search .form-control-feedback {
    position: absolute;
    z-index: 2;
    display: block;
    width: 2.375rem;
    height: 2.375rem;
    line-height: 2.375rem;
    text-align: center;
    pointer-events: none;
    color: #aaa;
}
</style>
