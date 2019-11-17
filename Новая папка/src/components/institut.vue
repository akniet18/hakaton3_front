<template>
  <div class="wrapper">
    <div class="container">
      <div class="row">
        <div class="col-xl-3 col-md-4 mb-4" v-for="d in data">
        	<router-link tag="div" :to="{name: 'user', params: {id: d.id}}">
	          <div class="card border-0 shadow">
	            <img :src="d.avatar" class="img-thumbnail img mt-3" style="width:200px; height:200px; margin-left: auto;margin-right: auto" alt="...">
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
  		id: this.$route.params.id,
  		data: []
  	}
  },
  created(){
  	let data = {
  		'search_id': this.id
  	}
  	this.$http.post('users/search_user/', data)
  	  .then(r => {
  	  	return r.json()
  	  })
  	  .then(r => {
  	  	this.data = r.users
  	  	console.log(r)
  	  }, r => {
  	  	console.log(r)
  	  })
  }
};
</script>

<style scoped>

</style>
