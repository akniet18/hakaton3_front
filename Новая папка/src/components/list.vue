<template>
  <div class="wrapper">
    <div class="container">
      <div class="row">
        <div class="col-xl-3 col-md-6 mb-4" v-for="d in data">
          <router-link tag="div" :to="{name: 'user', params: {id: d.id}}">
            <div class="card border-0 shadow">
              <img :src="'http://localhost:8000' + d.avatar" class="card-img-top" alt="...">
              <div class="card-body text-center">
                <h5 class="card-title mb-0">{{d.last_name}} {{d.first_name}}</h5>
                <div class="card-text text-black-50">{{d.job}}</div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data(){
  	return {
  		search: this.$route.params.search_s,
      data: []
  	}
  },
  created(){
  	this.send()
  },
  watch: {
    search(val){
      console.log(val)
      this.send()
    }
  },
  methods: {
    send() {
      this.$http.get('users/?search='+this.search)
      .then(r => {
        return r.json()
      })
      .then(r => {
        this.data = r
        console.log(r)
      }, r => {
        console.log(r)
      })
    }
  }
};
</script>

<style scoped>

</style>
