import  LibraryBooksListTemplate  from "../../../templates/library-templates/library-books-template/list-template.js";
import { base_url,sweetAlert,toasterSuccess,toasterError} from "../../../global.js";
   

const LibraryBooksList = {
	template: LibraryBooksListTemplate,

	data() {
		return {
			createModal: false,
			editModal: false,
			deleteModal: false,
			fromInput:{name: '', branches_id: '', created_by: ''},
			branches: {},
		    books: {},
		    clickedBook:{}
		  }   
	},
	mounted(){
		console.log("mounted")
		this.getAllBooks();
		this.getAllBranches();
	},

	methods: {
		getAllBranches(){
			var vm = this;
			axios.get(base_url+"api/libraryBooks/create")
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
			axios.get(base_url+"api/libraryBooks")
    		.then(function (response) {
    			 vm.books = response.data.data;
    			// console.log(vm.books);	
    		})
    		.catch(function (error) {
    			console.log(error.response);
            });
    	},
    	createBook(){
			const created_by = localStorage.getItem("idUser")
			this.fromInput.created_by = created_by;
			var vm = this;
			axios.post(base_url+"api/libraryBooks",vm.fromInput)
    		.then(function (response) {
    			// console.log(response);	
    			vm.getAllBooks();
    			toasterSuccess(response.data.heading,response.data.message)
    		})
    		.catch(function (error) {
    			console.log(error.response);
<<<<<<< HEAD
    			console.log('error from library submit');
    			sweetAlert('riwoerweriw','rewrwerwer');
=======
>>>>>>> 5b2abdb2ac37bc63f43fa83a1c9ab45641ecf2ec
    // 			const wrapper = document.createElement('div');
				// wrapper.innerHTML = error.response.data.message;

				// swal({
				//   title: 'Test Title',
				//   text: 'Test Text',
				//   content: wrapper,
				//   /*type: 'error'*/
				//   dangerMode: true,

				// });
				toasterError(error.response.data.heading,error.response.data.message)
				// sweetAlert(error.response.data.heading,error.response.data.message)
            });
		},
    	selectBook(book){
			this.clickedBook = book;
			// console.log(this.clickedBook);
		},
    	updateBook(){
			this.clickedBook.updated_by = localStorage.getItem("idUser");
			var id = this.clickedBook.id;
			var vm = this;
			axios.put(base_url+"api/libraryBooks/"+id,vm.clickedBook)
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
		},
		deleteBook(){
			var id = this.clickedBook.id;
			var vm = this;
			axios.delete(base_url+"api/libraryBooks/"+id)
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

