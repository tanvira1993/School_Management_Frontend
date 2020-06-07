import  LibraryBookshelvesListTemplate  from "../../../templates/library-templates/library-bookshelves-templates/list-template.js";
import { base_url,sweetAlert,toasterSuccess,toasterError,toasterWarning,headerConfig} from "../../../global.js";
   

const LibraryBookshelvesList = {
	template: LibraryBookshelvesListTemplate,

	data() {
		return {
			disbutton: false,
			editModal: false,
			deleteModal: false,
			branches: {},
		    bookshelveses: {},
		    clickedBookshelves:{}
		  }   
	},
	
	
	mounted(){
		console.log("mounted")
		setTimeout(() => $('#example1').DataTable(), 2000);
		this.getAllBookshelves();
		this.getAllBranches();
	},

	methods: {
		createPage(){
			this.$router.push({ name: "LibraryBookshelvesCreate"});
		},
		getAllBranches(){
			var vm = this;
			axios.get(base_url+"api/libraryBookshelves/create",headerConfig())
    		.then(function (response) {
    			 vm.branches = response.data.data;
    			// console.log(vm.branches);	
    		})
    		.catch(function (error) {
    			console.log(error.response);
            });
		},
		getAllBookshelves(){
			var vm = this;
			axios.get(base_url+"api/libraryBookshelves",headerConfig())
    		.then(function (response) {
    			 vm.bookshelveses = response.data.data;
    			 setTimeout(() => $('#example1').DataTable(), 2000);	
    		})
    		.catch(function (error) {
    			console.log(error.response);
            });
    	},
    	selectBookshelves(bookshelves){
			this.clickedBookshelves = bookshelves;
			// console.log(this.clickedBook);
		},
    	updateBookshelves(){
			var id = this.clickedBookshelves.id;
			var vm = this;
			axios.put(base_url+"api/libraryBookshelves/"+id,vm.clickedBookshelves,headerConfig())
    		.then(function (response) {
    			// console.log(response);
    			vm.getAllBookshelves();
				toasterSuccess(response.data.heading,response.data.message)
    		})
    		.catch(function (error) {
    			console.log(error.response);
    			vm.getAllBookshelves();
				toasterError(error.response.data.heading,error.response.data.message)
				// sweetAlert(error.response.data.heading,error.response.data.message)

            });
		},
		deleteBookshelves(){
			var id = this.clickedBookshelves.id;
			var vm = this;
			axios.delete(base_url+"api/libraryBookshelves/"+id,headerConfig())
    		.then(function (response) {
    			// console.log(response);
    			vm.getAllBookshelves();
    			toasterSuccess(response.data.heading,response.data.message)	
    		})
    		.catch(function (error) {
    			console.log(error.response);
    			vm.getAllBookshelves();
    			toasterError(error.response.data.heading,error.response.data.message)
				// sweetAlert(error.response.data.heading,error.response.data.message)
            });
		},
		quantityValue(){
			var vm = this;
			var qntValue = this.clickedBookshelves.quantity;
			if (qntValue < 1) {
				vm.disbutton = true;
				toasterWarning("Recheck","Rows of bookshelves can't be zero or negative")
			}
			else{
				vm.disbutton = false;
			}
		},
    	
	
	},
	
	
}


export { LibraryBookshelvesList }