<template>
  <div class="wrapper">
  	<div class="form">
  		<div class="log_form">
  			<div class="title"><h1>Login</h1></div>
	  		<el-form label-position="top" :model="ruleForm" :rules="rules" ref="ruleForm"  label-width="120px" class="demo-ruleForm">
			  <el-form-item label="Username" prop="username">
			    <el-input v-model="ruleForm.username" placeholder="username"></el-input>
			  </el-form-item>

			  <el-form-item label="Password" prop="password">
			    <el-input type="password" v-model="ruleForm.password" autocomplete="off" placeholder="password"></el-input>
			  </el-form-item>
			  
			  <el-form-item>
			    <el-button type="primary" @click="submitForm('ruleForm')">Create</el-button>
			    <el-button @click="resetForm('ruleForm')">Reset</el-button>
			  </el-form-item>
			</el-form>			
  		</div>
		<div class="regDiv">
			Ещё нет аккаунта? 
			<router-link tag="el-link" :to="{name: 'reg'}"><el-link class="regf" type="primary">Зарегистрируйтесь</el-link></router-link>
		</div>
  	</div>	
  </div>
</template>

<script>
export default {
data() {
  return {
    ruleForm: {
      username: '',
      password: '',
    },
    rules: {
      username: [
        { required: true, message: 'Please input username', trigger: 'blur' },
      ],
      password: [
        { required: true, message: 'Please input password', trigger: 'blur' }
      ],

    }
  };
},
methods: {
  submitForm() {
    this.$refs['ruleForm'].validate((valid) => {
      if (valid) {
        alert('submit!');
      } else {
        console.log('error submit!!');
        return false;
      }
    });
  },
  resetForm() {
    this.$refs['ruleForm'].resetFields();
  }
}
};
</script>

<style scoped>
.wrapper{
	width: 100%;
	height: 100%;
	min-height: 100vh;
	background: rgb(131,58,180);
    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 0%, rgba(252,176,69,1) 32%);
}
/*.title{
	text-align:center;
	background: #e5e9f2;
	margin-top: -20px
}*/
.title h1{
	width: calc(100% + 40px);
	padding: 10px 0;
	text-align:center;
	background: #fafafa;
	margin-top: -20px;
	margin-left: -20px;
	border-bottom: 1px solid #e5e9f2;
}
.form{
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 60%;	
}
.log_form, .regDiv{
	padding: 20px;
	box-shadow: 0 0 10px 5px rgba(0,0,0,.5);
	background: #fff;
}
.regDiv{
	text-align: center;
	margin-top: 20px;
}
.regDiv a{
	margin-top: -2px;
}
</style>
