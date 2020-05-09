import Vue from './assets/vue.esm.browser.min.js'
import {router} from './routes.js'
import {base_url} from './global.js'

import {
	Navbar
} from './components/navbar.js'

import {
	Dashboard
} from './components/dashboard.js'

import {
	MainTemplate
} from './templates/main-template.js'

import {
	OrgCreate
} from './components/organization/create.js'



new Vue({
    el: '#app', // This should be the same as your <div id=""> from earlier.
    components: {
    	'navbar': Navbar, 'dashboard': Dashboard
    },
    mode : 'history',
    router,
    template: MainTemplate,

    mounted: async function(){  	
    	await this.validateLogin();
    	await this.headerConfig();
    	
    	console.log("from main");

    },
    methods:{    	

    	headerConfig (){
    		const token = localStorage.getItem("token")
    		console.log('interceptor header==>',token)
    		const id = localStorage.getItem("idUser")

    		if(token == null && id == null){
    			return null
    		}

    		window.axios.interceptors.request.use(
    			config => {

    				if (token) {
    					config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    					config.headers['token'] = token;
    					config.headers['user_id'] = id;
    				}
    				return config;

    			},
    			error => {
    				Promise.reject(error)
    			});
    	},
    	validateLogin (){
    		const self = this;
    		const url = base_url+"api/tokenValidate"
    		const jwt = localStorage.getItem("token")
    		const id = localStorage.getItem("idUser")

    		if(jwt == null && id == null){
    			return null
    		}

    		axios.post(url,{
    			jwt:jwt,
    			id:id
    		})
    		.then(function (response) {
    			console.log(response);
    			//Dashboard redirect
    		})
    		.catch(function (error) {
    			console.log(error);
    			console.log('error from main');
    			//Login Page redirect

    		});

    	}
    }
})
