import  LibraryBooksListTemplate  from "../../../templates/library-templates/library-books-templates/list-template.js";
import { base_url,sweetAlert,toasterSuccess,toasterError,headerConfig} from "../../../global.js";
   

const LibraryBooksList = {
	template: LibraryBooksListTemplate,

	data() {
		return {
			editModal: false,
			deleteModal: false,
			branches: {},
		    books: {},
		    clickedBook:{}
		  }   
	},
	/*created(){
		setTimeout(() => $('#example1').DataTable(), 2000);
	},*/
	
	mounted(){
		console.log("mounted")
		setTimeout(() => $('#example1').DataTable(), 2000);
		this.getAllBooks();
		this.getAllBranches();
	},

	methods: {
		createPage(){
			this.$router.push({ name: "LibraryBooksCreate"});
		},
		getAllBranches(){
			var vm = this;
			axios.get(base_url+"api/libraryBooks/create",headerConfig())
    		.then(function (response) {
    			 vm.branches = response.data.data;
    			// console.log(vm.branches);	
    		})
    		.catch(function (error) {
    			console.log(error.response);
            });
		},
		getAllBooks(){
			var vm = this;
			axios.get(base_url+"api/libraryBooks",headerConfig())
    		.then(function (response) {
    			 vm.books = response.data.data;
    			 setTimeout(() => $('#example1').DataTable(), 2000);
    			console.log(vm.books);	
    		})
    		.catch(function (error) {
    			console.log(error.response);
            });
    	},
    	selectBook(book){
			this.clickedBook = book;
			// console.log(this.clickedBook);
		},
    	updateBook(){
			var id = this.clickedBook.id;
			var vm = this;
			axios.put(base_url+"api/libraryBooks/"+id,vm.clickedBook,headerConfig())
    		.then(function (response) {
    			// console.log(response);
    			vm.getAllBooks();
				toasterSuccess(response.data.heading,response.data.message)
    		})
    		.catch(function (error) {
    			console.log(error.response);
    			vm.getAllBooks();
				toasterError(error.response.data.heading,error.response.data.message)
				// sweetAlert(error.response.data.heading,error.response.data.message)

            });
		},
		deleteBook(){
			var id = this.clickedBook.id;
			var vm = this;
			axios.delete(base_url+"api/libraryBooks/"+id,headerConfig())
    		.then(function (response) {
    			// console.log(response);
    			vm.getAllBooks();
    			toasterSuccess(response.data.heading,response.data.message)	
    		})
    		.catch(function (error) {
    			console.log(error.response);
    			toasterError(error.response.data.heading,error.response.data.message)
				// sweetAlert(error.response.data.heading,error.response.data.message)
            });
		}
    	
	
	},
	
	
}


export { LibraryBooksList }