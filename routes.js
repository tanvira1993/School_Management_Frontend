import { Login } from './components/login.js'
import { Dashboard } from './components/dashboard.js'
import { Test } from './components/test.js'

import { OrgCreate } from './components/organization/create.js'
import { OrgIndex } from './components/organization/index.js'

import Vue from './assets/vue.esm.browser.min.js'


Vue.use(VueRouter)

const routing = 
[
{
	path: '/login',
	component: Login,
	name: "Login",
	meta: {requiresGuest: true},
	
},

{
	path: '/',
	component: Dashboard,
	name: "Dashboard",
	meta: {requiresAuth: true},
	children: [

		//route space for ziadul
		{path: 'test', component: Test, name: "Test"},
		{path: 'organization', component: OrgIndex, name: "organizationIndex"},





		//route space for tanvir





		//route space for hashmi
		]
	}


	]



	const router = new VueRouter({
		routes: routing
	})

	router.beforeEach((to, from, next) => {
		if(to.matched.some(record => record.meta.requiresAuth)){
			if (localStorage.getItem("token")) {
				next();
			} else {
				router.replace('/login');
			}
			
		} else{
			next();
		}
	})

	router.beforeEach((to, from, next) => {
		if(to.matched.some(record => record.meta.requiresGuest)){
			if (!localStorage.getItem("token")) {
				next();
			} else {
				router.replace('/');
			}
			
		} else{
			next();
		}
	})

	export {router}