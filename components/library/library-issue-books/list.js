import  LibraryIssueBookListTemplate  from "../../../templates/library-templates/library-issue-book-templates/list-template.js";
import { base_url,sweetAlert,toasterSuccess,toasterError,toasterWarning,headerConfig} from "../../../global.js";
   

const LibraryIssueBookList = {
	template: LibraryIssueBookListTemplate,

	data() {
		return {
			helpBox: false,
			editModal: false,
			deleteModal: false,
			dngr: false,
			branches: {},
		    issuedBooks: {},
		    clickedIssuedBook:{},
		    categories: {},
			books: {},
			categories: {},
			users: {},
			avlBooks: "",
			booksLeft: "",
		  }   
	},
	
	mounted(){
		console.log("mounted")
		setTimeout(() => $('#example1').DataTable(), 2000);
		this.getAllIssuedBooks();
		this.getAllBranches();
	},

	methods: {
		createPage(){
			this.$router.push({ name: "LibraryIssueBookCreate"});
		},
		getAllBranches(){
			var vm = this;
			axios.get(base_url+"api/libraryIssueBooks/create",headerConfig())
    		.then(function (response) {
    			 vm.branches = response.data.data;
    			// console.log(vm.branches);	
    		})
    		.catch(function (error) {
    			console.log(error.response);
            });
		},
		getAllIssuedBooks(){
			var vm = this;
			axios.get(base_url+"api/libraryIssueBooks",headerConfig())
    		.then(function (response) {
    			 vm.issuedBooks = response.data.data;
    			 setTimeout(() => $('#example1').DataTable(), 2000);
    			// console.log(vm.issuedBooks);	
    		})
    		.catch(function (error) {
    			console.log(error.response);
            });
    	},
    	selectIssuedBook(issuedBook){
			this.clickedIssuedBook = issuedBook;
			/*console.log(this.clickedIssuedBook);*/
			var vm = this;
			axios.get(base_url+"api/findIssueDependencies/"+vm.clickedIssuedBook.branches_id,headerConfig())
    		.then(function (response) {
    			 vm.users = response.data.data.users;
    			 // console.log(response.data.data);
    		})
    		.catch(function (error) {
    			console.log(error.response.data.heading)
            });

    		//getting avaiable book list by books id
			axios.get(base_url+"api/availableBooks/"+vm.clickedIssuedBook.library_books_id,headerConfig())
    		.then(function (response) {
    			 console.log(response.data.data);	
    			 vm.avlBooks = response.data.data;
    			 /*console.log(vm.avlBooks);*/
    			 //if available books returns 0
    			 if (vm.avlBooks == 0) {
    			 	vm.booksLeft = response.data.data;
    			 	vm.dngr = true;
    			 	vm.avlBooks = "";
    			 	vm.avlBooks = vm.clickedIssuedBook.quantity;
    			 	vm.helpBox = true;
    			 }
    			 else{
    			 	vm.dngr = false;
    			 	vm.booksLeft = vm.avlBooks;
    			 	vm.avlBooks = vm.avlBooks+vm.clickedIssuedBook.quantity;
    			 	vm.helpBox = true;
    			 }
    			 console.log(vm.dngr)
    		})
    		.catch(function (error) {
    			console.log(error.response.data.heading)
            });
		},
    	updateIssuedBook(){
			var vm = this;
			/*console.log(this.clickedIssuedBook)*/
			axios.put(base_url+"api/libraryIssueBooks/"+vm.clickedIssuedBook.id,vm.clickedIssuedBook,headerConfig())
    		.then(function (response) {
    			// console.log(response);
    			vm.getAllIssuedBooks();
				toasterSuccess(response.data.heading,response.data.message)
    		})
    		.catch(function (error) {
    			console.log(error.response);
    			vm.getAllBookLocations();
				toasterError(error.response.data.heading,error.response.data.message)
				// sweetAlert(error.response.data.heading,error.response.data.message)

            });
		},
		
		returnIssuedBook(){
			var id = this.clickedIssuedBook.id;
			console.log(id);
			var vm = this;
			axios.delete(base_url+"api/libraryIssueBooks/"+id,headerConfig())
    		.then(function (response) {
    			// console.log(response);
    			vm.getAllIssuedBooks();
    			toasterSuccess(response.data.heading,response.data.message)	
    		})
    		.catch(function (error) {
    			console.log(error.response);
    			// toasterError(error.response.data.heading,error.response.data.message)
				// sweetAlert(error.response.data.heading,error.response.data.message)
            });
		}
    	
	
	},
	
	
}


export { LibraryIssueBookList }