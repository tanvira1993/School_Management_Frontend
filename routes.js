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
import { HashmiTest } from './components/hashmiTest.js'
import { LibraryBooksCreate } from './components/library/library-books/create.js'
import { LibraryBooksList } from './components/library/library-books/list.js'
import { LibraryCategoriesCreate } from './components/library/library-categories/create.js'
import { LibraryCategoriesList } from './components/library/library-categories/list.js'
import { LibraryBookshelvesCreate } from './components/library/library-bookshelveses/create.js'
import { LibraryBookshelvesList } from './components/library/library-bookshelveses/list.js'
import { LibraryBookLocationCreate } from './components/library/library-book-locations/create.js'
import { LibraryBookLocationList } from './components/library/library-book-locations/list.js'
import { LibraryIssueBookCreate } from './components/library/library-issue-books/create.js'
import { LibraryIssueBookList } from './components/library/library-issue-books/list.js'
import { ShiftCreate } from './components/shift/create.js'
import { ShiftList } from './components/shift/list.js'
import { DepartmentCreate } from './components/department/create.js'
import { DepartmentList } from './components/department/list.js'








































































/*===========================include space for hashmi ends==========================*/

/*===========================include space for tanvir starts==========================
======================================================================================*/












































































/*===========================include space for tanvir ends==========================*/

/*===========================include space for siam starts==========================
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
		{path: '/organization/hashmiTest', component: HashmiTest, name: "HashmiTest"},
		/*============================ Library===========================*/
		{path: '/organization/libraryBooks/create', component: LibraryBooksCreate, name: "LibraryBooksCreate"},
		{path: '/organization/libraryBooks/list', component: LibraryBooksList, name: "LibraryBooksList"},
		
		{path: '/organization/libraryCategories/create', component: LibraryCategoriesCreate, name: "LibraryCategoriesCreate"},
		{path: '/organization/libraryCategories/list', component: LibraryCategoriesList, name: "LibraryCategoriesList"},

		{path: '/organization/libraryBookshelves/create', component: LibraryBookshelvesCreate, name: "LibraryBookshelvesCreate"},
		{path: '/organization/libraryBookshelves/list', component: LibraryBookshelvesList, name: "LibraryBookshelvesList"},

		{path: '/organization/libraryBookLocation/create', component: LibraryBookLocationCreate, name: "LibraryBookLocationCreate"},
		{path: '/organization/libraryBookLocation/list', component: LibraryBookLocationList, name: "LibraryBookLocationList"},

		{path: '/organization/libraryIssueBook/create', component: LibraryIssueBookCreate, name: "LibraryIssueBookCreate"},
		{path: '/organization/libraryIssueBook/list', component: LibraryIssueBookList, name: "LibraryIssueBookList"},
		/*============================ Shift ============================*/
		{path: '/organization/shift/create', component: ShiftCreate, name: "ShiftCreate"},
		{path: '/organization/shift/list', component: ShiftList, name: "ShiftList"},
		/*============================ Department ============================*/
		{path: '/organization/department/list', component: DepartmentList, name: "DepartmentList"},
		{path: '/organization/department/create', component: DepartmentCreate, name: "DepartmentCreate"},


























































































/*=============================route space for hashmi ends==========================*/


/*=============================route space for siam starts==========================
======================================================================================*/





































































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