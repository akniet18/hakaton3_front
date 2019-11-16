<template>
  <div class="wrapper">
    <div class="container">
        <div class="row">
          <div class="col-md-4 mb-5" v-for="d in data" v-bind:key="d.id">
            <div class="card h-100">
              <div class="card-footer">
                <router-link :to="{name: 'institut', params: {id: d.id}}">{{d.name}}</router-link>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
	data(){
		return{
			data: []
		}
	},
	created(){
        this.$http.get('users/institut/')
          .then(r=>{
            return r.json()
          })
          .then(r=>{
            this.data = r
            console.log(r)
          }, r=> {
            console.log(r)
          })
    }
};
</script>

<style scoped>

</style>
