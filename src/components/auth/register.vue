<template>
  <div class="wrapper">
  	<div class="container-fluid">
      <div class="row no-gutter">
        <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
        <div class="col-md-8 col-lg-6">
          <div class="login d-flex align-items-center py-5">
            <div class="container">
              <div class="row">
                <div class="col-md-9 col-lg-8 mx-auto">
                  <h3 class="login-heading mb-4">Registration</h3>
                  <el-form label-position="top" :model="ruleForm" :rules="rules" ref="ruleForm"  label-width="120px" class="demo-ruleForm">
                      <el-form-item prop="username">
                        <el-input round v-model="ruleForm.username" placeholder="username"></el-input>
                      </el-form-item>

                      <el-form-item prop="email">
                        <el-input round v-model="ruleForm.email" placeholder="email"></el-input>
                      </el-form-item>
              

                      <el-form-item prop="password1">
                        <el-input type="password" v-model="ruleForm.password1" autocomplete="off" placeholder="password"></el-input>
                      </el-form-item>

                      <el-form-item prop="password2">
                        <el-input type="password" v-model="ruleForm.password2" autocomplete="off" placeholder="confirm password"></el-input>
                      </el-form-item>
                      
                      <el-form-item>
                        <el-button class="col-md-12" type="primary" @click="submitForm('ruleForm')">Create</el-button>
                      </el-form-item>
                    </el-form>
                    <div class="text-center">
                      <a class="small" href="#">Forgot password?</a>
                    </div>  

                    <div class="text-center mt-4">
                      <router-link tag="el-button" type="primary" :to="{name: 'login'}" round size="mini" plain>Login</router-link>
                      <!-- <el-button class="col-md-8" type="primary" round size="mini" plain>registration</el-button> -->
                    </div>  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
data() {
	var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password again'));
        } else if (value !== this.ruleForm.password1) {
          callback(new Error('Two inputs don\'t match!'));
        } else {
          callback();
        }
    };
  return {
    ruleForm: {
      username: '',
      password1: '',
      password2: '',
      email: ''
    },
    rules: {
      username: [
        { required: true, message: 'Please input username', trigger: 'blur' },
      ],
      password1: [
        { required: true, message: 'Please input password', trigger: 'blur' }
      ],
      password2: [
        { validator: validatePass2, trigger: 'blur' }
      ],
      email: [
       { required: true, message: 'Please input email address', trigger: 'blur' },
       { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
      ]
    }
  };
},
methods: {
  submitForm() {
    this.$refs['ruleForm'].validate((valid) => {
      if (valid) {
        let data = {
          'username': this.ruleForm.username,
          'email': this.ruleForm.email,
          'password': this.ruleForm.password1,
        }
        this.$http.post('users/register/', data)
          .then(r => {
            return r.json()
          })
          .then(r => {
            console.log(r)
            if (r.status == 'ok'){
              this.$router.push({name: 'login'})
            }
          }, r => {
            console.log(r)
          })
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
input{
  border-radius: 15px;
}
:root {
  --input-padding-x: 1.5rem;
  --input-padding-y: 0.75rem;
}
.bgs{
  height: 90vh;
  margin-top: auto;
  margin-bottom: auto
}
.login,
.image {
  min-height: 100vh;
}

.bg-image {
  background-image: url('https://source.unsplash.com/WEQbe2jBg40/600x1200');
  background-size: cover;
  background-position: center;
}

.login-heading {
  font-weight: 300;
}

.btn-login {
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  padding: 0.75rem 1rem;
  border-radius: 2rem;
}

.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-label-group>input,
.form-label-group>label {
  padding: var(--input-padding-y) var(--input-padding-x);
  height: auto;
  border-radius: 2rem;
}

.form-label-group>label {
  position: absolute;
  top: 0%;
  left: 0%;
  display: block;
  width: 100%;
  margin-bottom: 0;
  /* Override default `<label>` margin */
  line-height: 1.5;
  color: #495057;
  cursor: text;
  /* Match the input under the label */
  border: 1px solid transparent;
  border-radius: .25rem;
  transition: all .1s ease-in-out;
}

.form-label-group input::-webkit-input-placeholder {
  color: transparent;
}

.form-label-group input:-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-moz-placeholder {
  color: transparent;
}

.form-label-group input::placeholder {
  color: transparent;
}

.form-label-group input:not(:placeholder-shown) {
  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));
  padding-bottom: calc(var(--input-padding-y) / 3);
}

.form-label-group input:not(:placeholder-shown)~label {
  padding-top: calc(var(--input-padding-y) / 3);
  padding-bottom: calc(var(--input-padding-y) / 3);
  font-size: 12px;
  color: #777;
}
input{
  height: 50px!important;
}
/* Fallback for Edge
-------------------------------------------------- */

@supports (-ms-ime-align: auto) {
  .form-label-group>label {
    display: none;
  }
  .form-label-group input::-ms-input-placeholder {
    color: #777;
  }
}

/* Fallback for IE
-------------------------------------------------- */

@media all and (-ms-high-contrast: none),
(-ms-high-contrast: active) {
  .form-label-group>label {
    display: none;
  }
  .form-label-group input:-ms-input-placeholder {
    color: #777;
  }
}

</style>
