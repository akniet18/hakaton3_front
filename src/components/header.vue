<template>
  <div class="wrapper">
    <header>
    	<div><router-link tag="el-link" :to="{name: 'home'}">Title</router-link></div>
    	<div>
    		<el-button type="success" icon="el-icon-circle-plus-outline" plain>Добавить отзыв</el-button>
    		<el-button type="primary" icon="el-icon-user-solid">Sign in</el-button>
    	</div>
    </header>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.wrapper{
	background: rgb(131,58,180);
    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 0%, rgba(252,176,69,1) 32%);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 5px;
}
header{
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 85%;
	margin: auto;
}
</style>
