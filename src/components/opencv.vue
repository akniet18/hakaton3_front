<template>
  <div class="wrapper">
    <div class="container">
      <h2>Contextual Classes</h2>
      <p>Contextual classes can be used to color table rows or table cells. The classes that can be used are: .active, .success, .info, .warning, and .danger.</p>
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="d in data" :class="[d.attnedance == 'false' ? 'table-danger' : 'table-primary']">
            <td>{{d.name}}</td>
            <td v-if="d.attnedance == 'false'" >Нб</td>
            <td v-if="d.attnedance == 'true'" >Б</td>
          </tr>      
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            data: []
        }
    },
    created(){
        this.getData()
    },
    methods: {
        getData(){
            this.$http.get('opencv/')
              .then(r => {
                return r.json()
              })
              .then(r => {
                this.data = r.status
                console.log(r)
              }, r => {
                console.log(r)
              })
        }
    },
};
</script>

<style scoped>

</style>
