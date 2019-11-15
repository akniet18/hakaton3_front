<template>
  <div class="wrapper">
    <div class="bt">
        <article>
            <div class="search_input">
                <el-input
                    placeholder="Type something"
                    prefix-icon="el-icon-search"
                    v-model="input2">
                </el-input>
            </div>
        </article>
    </div>
    
    <div class="articles">
        <el-row :gutter="24">
          <el-col :span="6" v-for="d in data" v-bind:key="d.id">
            <router-link tag="div" style="cursor:pointer" :to="{name: 'user', params: {id: d.id}}">
                <div class="bc">
                  <div class="avatar"><img :src="d.avatar" alt="avatar"></div>
                  <div>{{d.last_name}} {{d.first_name}}</div>
                </div>
            </router-link>
          </el-col>
        </el-row>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            data: [
                {'id': 1,'avatar': 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/08/19/08/amber-heard.jpg?w968h681', 'first_name': 'Amber', 'last_name': 'Heaerd'},
                {'id': 2,'avatar': 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/08/19/08/amber-heard.jpg?w968h681', 'first_name': 'Amber', 'last_name': 'Heaerd'},
                {'id': 3,'avatar': 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/08/19/08/amber-heard.jpg?w968h681', 'first_name': 'Amber', 'last_name': 'Heaerd'},
                {'id': 4,'avatar': 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/08/19/08/amber-heard.jpg?w968h681', 'first_name': 'Amber', 'last_name': 'Heaerd'},
                {'id': 5,'avatar': 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/08/19/08/amber-heard.jpg?w968h681', 'first_name': 'Amber', 'last_name': 'Heaerd'},
            ]
        }
    }
};
</script>

<style scoped>
article{
    width: 85%;
    margin: auto;
    margin-top: 5%;
}
.bt{
    padding: 10px 0 30px 0;
    border-bottom: 1px solid #FC9C40;
}
.search_input{
   width: 80%;
   margin: auto;
   padding-top: 20px 0;
}
.bc{
    background: rgb(131,58,180);
    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 0%, rgba(252,176,69,1) 32%);
    margin-bottom: 20px;
    text-align: center;
    padding: 20px 0;
    border-radius: 15px;
    box-shadow: 0 0 5px 1px rgba(0,0,0,.5)
}
.articles{
    padding: 20px 0;
    width: 90%;
    margin: auto;
}
.avatar img{
    border-radius: 100%;
    width: 5em;
    height: 5em;
}
</style>
