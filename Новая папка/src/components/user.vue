<template>
  <div class="wrapper">
   	<div class="container py-4 my-2 mb-5 bg-white">
	    <div class="row">
	        <div class="col-md-4 pr-md-5">
	            <img class="w-100 rounded border" :src="data.avatar" />
	            <div class="pt-4 mt-2">
	                <section class="mb-4 pb-1">
	                    <h3 class="h6 font-weight-light text-secondary text-uppercase">Work Experiences</h3>
	                    <div class="work-experience pt-2">
	                        <div class="work mb-4" v-for="t in data.university">
	                            <!-- <strong class="h5 d-block text-secondary font-weight-bold mb-1">Prodesign Inc</strong> -->
	                            <strong class="h6 d-block text-warning mb-1">{{t.spec}}</strong>
	                            <p class="text-secondary">{{t.name}}, {{t.years}}</p>
	                        </div>
	                        <!-- <div class="work mb-4">
	                            <strong class="h5 d-block text-secondary font-weight-bold mb-1">Blue Tech</strong>
	                            <strong class="h6 d-block text-warning mb-1">Senior Programmer</strong>
	                            <p class="text-secondary">George Avenue Mobile, AL 36608</p>
	                        </div> -->
	                    </div>    
	                </section>
	                <section class="mb-5 mb-md-0">
	                    <h3 class="h6 font-weight-light text-secondary text-uppercase">Skills</h3>
	                    <div class="skills pt-1 row">
	                        <div class="col-4 mb-2">
	                            <div class="chart" data-percent="95" data-scale-color="#fff"><span>PHP</span></div>
	                        </div>
	                        <div class="col-4 mb-2">
	                            <div class="chart" data-percent="85" data-scale-color="#fff"><span>Ruby</span></div>
	                        </div>
	                        <div class="col-4 mb-2">
	                            <div class="chart" data-percent="90" data-scale-color="#fff"><span>Java</span></div>
	                        </div>
	                        <div class="col-4 mb-2">
	                            <div class="chart" data-percent="82" data-scale-color="#fff"><span>Python</span></div>
	                        </div>
	                        <div class="col-4 mb-2">
	                            <div class="chart" data-percent="70" data-scale-color="#fff"><span>C++</span></div>
	                        </div>
	                        <div class="col-4 mb-2">
	                            <div class="chart" data-percent="60" data-scale-color="#fff"><span>ASP</span></div>
	                        </div>
	                    </div>
	                </section>
	            </div>
	        </div>
	        <div class="col-md-8">
	            <div class="d-flex align-items-center">
	                <h2 class="font-weight-bold m-0">
	                    {{data.last_name}} {{data.first_name}}
	                </h2>
	                <address class="m-0 pt-2 pl-0 pl-md-4 font-weight-light text-secondary">
	                    <i class="fa fa-map-marker"></i>
	                    {{data.location}}
	                </address>
	            </div>
	            <p class="h5 text-primary mt-2 d-block font-weight-light">
	                {{data.job}}
	            </p>
	            <p class="lead mt-4">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
	            <section class="mt-5">
	                <h3 class="h6 font-weight-light text-secondary text-uppercase">Rankings</h3>
	                <div class="d-flex align-items-center">
	                    
	                    <div>
	                        <input data-filled="fa fa-2x fa-star mr-1 text-warning" data-empty="fa fa-2x fa-star-o mr-1 text-light" value="5" type="hidden" class="rating" data-readonly />
	                    </div>
	                    <star-rating
				             v-bind:max-rating="5"
				             inactive-color="#000"
				             active-color="#FFC107"
				             :rating="data.rating"
				             read-only
				             v-bind:star-size="30">
						</star-rating>
	                </div>
	            </section>

	            <div class="mt-5 comments_section"><h2>Comments</h2></div>
				
				<div class="comments_form row mt-5" v-if="token !== 'undefined'">
					<div class="ml-1 mb-2 col-md-12">
						<star-rating v-bind:increment="0.1"
				             v-bind:max-rating="5"
				             inactive-color="#000"
				             active-color="#f00"
				             :rating="form.rating"
				             v-bind:star-size="20">
						</star-rating>
					</div>
					<div class="col-md-12">
						<el-form :model="form" :rules="rules" ref="ruleForm" label-width="0" class="demo-ruleForm wd" size="mini">
							<el-form-item prop="comment" size="medium">
						      <el-input v-model="form.comment" type="textarea"></el-input>
						    </el-form-item>
						    <el-form-item>
						      <el-button type="primary" @click="commentcreate">Create</el-button>
						    </el-form-item>
						</el-form>
					</div>
				</div>
				<div v-else class="row mt-5 ml-1 bcs">
					<router-link tag="el-link" :to="{name: 'login'}">Войдите чтобы оставить отзыв</router-link>
				</div>

	            <section class="d-flex mt-5">

	                <div class="row">
					    <div class="col-md-12" v-for="c in data.comment">
					        <div class="media g-mb-30 media-comment">
					            <div class="media-body u-shadow-v18 g-bg-secondary g-pa-30">
					              <div class="g-mb-15">
					                <h5 class="h5 g-color-gray-dark-v1 mb-0">{{c.author.username}}</h5>
					                <span class="g-color-gray-dark-v4 g-font-size-12 d-flex align-items-center">{{c.date | dataform}}
					                	<span class="ml-3 mb-1">
					                		<star-rating 
									             inactive-color="#000"
									             active-color="#FFC107"
									             :rating="c.rating"
									             read-only
									             v-bind:star-size="15">
											</star-rating>
					                	</span>
					                </span>
					              </div>
					        
					              <p>{{c.comment}}</p>
					            </div>
					        </div>
					    </div>
					</div>
	            </section>
	        </div>
	        
	    </div>
	</div>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating'
import moment from 'moment'

export default {
  components: {
	StarRating
  },
  data(){
  	return {
  		token: localStorage.getItem('token'),
  		form: {
  			comment: '',
  			rating: 0
  		},
  		rules:{
  			comment: [
				{required: true, message: 'Please input comment', trigger: 'blur' },
			],
			rating: [
				{required: true, trigger: 'blur' },
			]
  		},
  		id: this.$route.params.id,
  		data: {}
  	}
  },
  created() {
  	this.$http.get('users/'+this.id+'/')
  	  .then(r => {
  	  	return r.json()
  	  })
  	  .then(r => {
  	  	this.data = r
  	  	console.log(r)
  	  }, r => {
  	  	console.log(r)
  	  })
  },
  methods: {
	commentcreate(){
		let data = {
			'rating': this.form.rating,
			'comment': this.form.comment,
			'user': this.id
		}
		let headers = {
			'Authorization': 'Token '+this.token
		}
		console.log(headers)
		this.$http.post('rating/', data, {headers})
		  .then(r => {
		  	return r.json()
		  })
		  .then(r => {
		  	console.log(r)
		  }, r => {
		  	console.log(r)
		  })
	}
  },
  filters: {
  	dataform(value){
  		if (value) {
			return moment(String(value)).format('MM/DD/YYYY hh:mm')
		}
  	},

  }
};
</script>

<style scoped>
.bg-white{
	border: 1px solid silver;
}
.wrapper{
	/*margin-top: 8%;*/
	position: relative;
	top: 10%;
	left: 0;
	width: 100%;
	overflow:hidden;
	margin-top: 7%;
	/*padding-bottom: 30px;*/
	/*height: 100%;*/
}
.comments_section{
	margin-bottom: -35px;
}
.bcs{
	background: #F0F9EB;
	width: 95%;
	padding: 10px;
	text-align: center;
}
.bcs a{
	color: blue;
	text-align: center;
}
</style>
