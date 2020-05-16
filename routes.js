import { Login } from './components/login.js'
import { Dashboard } from './components/dashboard.js'
import { Test } from './components/test.js'

/*===========================include space for zaidul starts==========================
======================================================================================*/

import { OrganizationCreate } from './components/organization/create.js'
import { BranchIndex } from './components/branch/branch-index.js'
import { OrgIndex } from './components/organization/index.js'


import { InventoryIndex } from './components/inventory/inventory-index.js'















/*===========================include space for zaidul ends==========================*/

/*===========================include space for hashmi starts==========================
======================================================================================*/

import { LibraryBooksList } from './components/library/library-books/list.js'










/*===========================include space for hashmi ends==========================*/

/*===========================include space for tanvir starts==========================
======================================================================================*/

















/*===========================include space for tanvir ends==========================*/

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

/*=============================route space for zaidul starts==========================
======================================================================================*/
		{path: 'test', component: Test, name: "Test"},



		/*============================ organizations===========================*/

		{path: 'organization', component: OrgIndex, name: "organizationIndex"},
		{path: 'organization/create', component: OrganizationCreate, name: "organizationCreate"},
		{path: '/branch', component: BranchIndex, name: "Branch"},

		{path: '/inventory/materials', component: InventoryIndex, name: "InventoryIndex"},























/*=============================route space for ziadul ends==========================*/


/*=============================route space for tanvir starts==========================
======================================================================================*/













/*=============================route space for tanvir ends==========================*/

/*===========================route space for hashmi starts==========================
======================================================================================*/

		/*============================ Library===========================*/
		{path: '/organization/libraryBooks/list', component: LibraryBooksList, name: "LibraryBooksList"},















/*=============================route space for hashmi ends==========================*/
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