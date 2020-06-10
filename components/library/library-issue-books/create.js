import  LibraryIssueBookCreateTemplate  from "../../../templates/library-templates/library-issue-book-templates/create-template.js";
import { base_url,sweetAlert,toasterSuccess,toasterError,headerConfig} from "../../../global.js";


const LibraryIssueBookCreate = {
	template: LibraryIssueBookCreateTemplate,

	data() {
		return {
			helpBox: false,
			dngr: false,
			fromInput:{
				branches_id: null, 
				library_book_categories_id: null, 
				library_books_id: null,
				users_id: null,
				quantity: null,
			},
			branches: {},
			categories: {},
			books: {},
			users: {},
			avlBooks: "",
		}   
	},
	mounted(){
		console.log("mounted")
		this.getAllBranches();
		
	},

	methods: {
		getAllBranches(){
			var vm = this;
			axios.get(base_url+"api/libraryIssueBooks/create",headerConfig())
    		.then(function (response) {
    			vm.branches = response.data.data;
    			console.log(response.data.data);	
    		})
    		.catch(function (error) {
    			console.log(error.response);
            });
		},
    createIssueBook(){
    		/*console.log(this.fromInput)*/
			var vm = this;
			axios.post(base_url+"api/libraryIssueBooks",vm.fromInput,headerConfig())
    		.then(function (response) {
    			// console.log(response);	
    			vm.$router.push({ name: "LibraryIssueBookList"});	
    			toasterSuccess(response.data.heading,response.data.message)
    		})
    		.catch(function (error) {
    			console.log(error.response);
				toasterError(error.response.data.heading,error.response.data.message)
				// sweetAlert(error.response.data.heading,error.response.data.message)
            });
		},

		findIssueDependencies(){
			var id = this.fromInput.branches_id;
			var vm = this;
			axios.get(base_url+"api/findIssueDependencies/"+id,headerConfig())
    		.then(function (response) {
    			 // console.log(response.data.data);	
    			 vm.categories = response.data.data.libraryBookCategories;
    			 vm.users = response.data.data.users;
    		})
    		.catch(function (error) {
    			console.log(error.response.data.heading)
            });
		},
		availableBooksByCategory(){
			/*this.books = null;*/
			var vm = this;
			axios.get(base_url+"api/availableBooksByCategory/"+vm.fromInput.library_book_categories_id,headerConfig())
    		.then(function (response) {
    			 // console.log(response);	
    			 vm.books = response.data.data;
    		})
    		.catch(function (error) {
    			console.log(error.response.data.heading)
            });
		},
		availableBooks(){
			var vm = this;
			axios.get(base_url+"api/availableBooks/"+vm.fromInput.library_books_id,headerConfig())
    		.then(function (response) {
    			 console.log(response.data.data);	
    			 vm.avlBooks = response.data.data;
    			 if (vm.avlBooks == 0) {
    			 	vm.dngr = true;
    			 }
    			 else{
    			 	vm.dngr = false;
    			 }
    			 /*console.log(vm.avlBooks);*/
    		})
    		.catch(function (error) {
    			console.log(error.response.data.heading)
            });
		},
    	
	
	},
	
	
}


export { LibraryIssueBookCreate }