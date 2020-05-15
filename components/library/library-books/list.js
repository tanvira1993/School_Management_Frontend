import  LibraryBooksListTemplate  from "../../../templates/library-templates/library-books-templates/list-template.js";
import { base_url,sweetAlert,toasterInfo} from "../../../global.js";
   

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
		/*this.selectBook();
		this.deleteBook();*/
	},

	methods: {
		getAllBranches(){
			var vm = this;
			axios.get(base_url+"api/libraryBooks/create")
    		.then(function (response) {
    			 /*vm.branches = response.data.data;*/
    			 vm.branches = response.data.data;
    			console.log(vm.branches);	

    			// self.$router.push({name: "Dashboard"});
    		})
    		.catch(function (error) {
    			console.log(error);
    			console.log('error from library create');
    			// self.$router.push({name: "Login"});


            });
		},
		getAllBooks(){
			var vm = this;
			axios.get(base_url+"api/libraryBooks")
    		.then(function (response) {
    			 /*vm.branches = response.data.data;*/
    			 vm.books = response.data.data;
    			console.log(vm.books);	

    			// self.$router.push({name: "Dashboard"});
    		})
    		.catch(function (error) {
    			console.log(error);
    			console.log('error from library list');
    			// self.$router.push({name: "Login"});


            });
    	},
    	createBook(){
			/*console.log(this.fromInput);*/
			const created_by = localStorage.getItem("idUser")
			this.fromInput.created_by = created_by;
			/*console.log(this.fromInput);*/
			var vm = this;
			axios.post(base_url+"api/libraryBooks",vm.fromInput)
    		.then(function (response) {
    			 
    			console.log(response);	
    			vm.getAllBooks();

    		})
    		.catch(function (error) {
    			console.log(error.response);
    			console.log('error from library submit');
    			sweetAlert('riwoerweriw','rewrwerwer')
    // 			const wrapper = document.createElement('div');
				// wrapper.innerHTML = error.response.data.message;

				// swal({
				//   title: 'Test Title',
				//   text: 'Test Text',
				//   content: wrapper,
				//   /*type: 'error'*/
				//   dangerMode: true,

				// });
				toasterInfo('tttt','gugugug')
            });
		},
    	selectBook(book){
			this.clickedBook = book;
			console.log(this.clickedBook);
			console.log(this.editModal);
		},
    	updateBook(){
			this.clickedBook.updated_by = localStorage.getItem("idUser");
			/*console.log(this.fromInput);*/
			var id = this.clickedBook.id;
			var vm = this;
			axios.put(base_url+"api/libraryBooks/"+id,vm.clickedBook)
    		.then(function (response) {
    			console.log(response);	
    		})
    		.catch(function (error) {
    			console.log(error);
    			console.log('error from library update');
    			// self.$router.push({name: "Login"});


            });
		},
		deleteBook(){
			var id = this.clickedBook.id;
			var vm = this;
			axios.delete(base_url+"api/libraryBooks/"+id)
    		.then(function (response) {
    			console.log(response);
    			vm.getAllBooks();	
    		})
    		.catch(function (error) {
    			console.log(error);
    			console.log('error from library update');
    			// self.$router.push({name: "Login"});


            });
		}
    	
		/*goToEdit(book){
			this.$router.push({ name: "LibraryBooksEdit", params: book})
		}*/
	
	},
	
	
}


export { LibraryBooksList }

