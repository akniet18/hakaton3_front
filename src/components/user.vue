<template>
  <div class="wrapper">
    <div class="t_div">
    	<div class="info">
    		<div class="avatar">
	    		<img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/08/19/08/amber-heard.jpg?w968h681" alt="">
	    	</div>
	    	<div>
	    		<div class="title">
	    			<h1>Amber Heard</h1>
	    			<el-button type="success" icon="el-icon-circle-plus-outline" plain>Добавить отзыв</el-button>
	    		</div>
	    		
	    	</div>
    	</div>
    	
    	<div>
    		
    	</div>
    </div>
  </div>
</template>

<script>
export default {
  
};
</script>

<style scoped>
.wrapper{
	margin-top: 8%;
}
.avatar img{
    border-radius: 15px;
    width: 208px;
    height: 208px;
}
.t_div{
	width: 85%;
	margin: auto;
	display: flex;
	justify-content: space-between;
}
.avatar{
	margin-right: 15px;
}
h1{
	color: #FCB045;
	border-bottom: 2px solid #FCB045;
	margin-right: 30px;
}
.info{
	display: flex;
	width: 100%;
}
.title{
	display: flex;
	align-items: center;
	justify-content: space-between;
}
</style>
