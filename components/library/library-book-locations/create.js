import  LibraryBookLocationCreateTemplate  from "../../../templates/library-templates/library-book-location-templates/create-template.js";
import { base_url,sweetAlert,toasterSuccess,toasterError,toasterWarning,headerConfig} from "../../../global.js";

const LibraryBookLocationCreate = {
	template: LibraryBookLocationCreateTemplate,

	data() {
		return {
			fromInput:{
				branches_id: null, 
				library_book_categories_id: null, 
				library_books_id: null,
				library_bookshelves_id: null,
				/*shelves_no: [],*/
				start_shelves_no: null,
				end_shelves_no: null,
				quantity: null,
				reserved: null,
			},
			/*rows:[],*/
			disbutton: false,
			branches: {},
			categories: {},
			books: {},
			booksheleves: {},
			bookshelevesRow: null,
		}   
	},
	mounted(){
		console.log("mounted")
		this.getAllBranches();
		
	},

	methods: {
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
    createBookLocation(){
    	// console.log(this.fromInput)
			var vm = this;
			axios.post(base_url+"api/libraryBookLocations",vm.fromInput,headerConfig())
    		.then(function (response) {
    			// console.log(response);	
    			vm.$router.push({ name: "LibraryBookLocationList"});	
    			toasterSuccess(response.data.heading,response.data.message)
    		})
    		.catch(function (error) {
    			console.log(error.response);
				toasterError(error.response.data.heading,error.response.data.message)
				// sweetAlert(error.response.data.heading,error.response.data.message)
            });
		},

		findLibraryDependencies(){
			var id = this.fromInput.branches_id;
			var vm = this;
			axios.get(base_url+"api/findLibraryLocationDependencies/"+id,headerConfig())
    		.then(function (response) {
    			 // console.log(response.data.data);	
    			 vm.categories = response.data.data.libraryBookCategories;
    			 /*vm.books = response.data.data.libraryBooks;*/
    			 vm.booksheleves = response.data.data.libraryBookshelves;
    		})
    		.catch(function (error) {
    			console.log(error.response.data.heading)
            });
		},
		findUnlocatedBooksByCategory(){
			var id = this.fromInput.library_book_categories_id;
			var vm = this;
			axios.get(base_url+"api/findUnlocatedBooksByCategory/"+id,headerConfig())
    		.then(function (response) {
    			 // console.log(response.data.data);	
    			 vm.books = response.data.data.libraryBooks;
    		})
    		.catch(function (error) {
    			console.log(error.response.data.heading)
            });
		},
		findBookshelvesRow(){
			this.bookshelevesRow = null;
			var id = this.fromInput.library_bookshelves_id;
			var vm = this;
			axios.get(base_url+"api/findBookshelvesRow/"+id,headerConfig())
    		.then(function (response) {
    			 /*console.log(response);	*/
    			 vm.bookshelevesRow = response.data.data;
    		})
    		.catch(function (error) {
    			console.log(error.response.data.heading)
            });
		},
		reservedBooks(){
			var reseved = this.fromInput.reserved;
			var bookQuantity = this.fromInput.quantity;
			var diff = bookQuantity - reseved;
			// console.log(diff);
			var vm = this;
			if (diff < 0) {
				vm.disbutton = true;
				toasterWarning("Recheck","Resserved books quantity can\'t grater than total Quantity of books")
			}
			else{
				vm.disbutton = false;
			}
		},

		quantityValue(){
			var vm = this;
			var qntValue = this.fromInput.quantity;
			if (qntValue < 1) {
				vm.disbutton = true;
				toasterWarning("Recheck","Quantity of book's can't be zero or negative")
			}
			else{
				vm.disbutton = false;
			}
		},
		reservedValue(){
			var vm = this;
			var rsvValue = this.fromInput.reserved;
			if (rsvValue < 0) {
				vm.disbutton = true;
				toasterWarning("Recheck","Book's reserved value can't be negative")
			}
			else{
				vm.disbutton = false;
			}
		},
		shelvesValidationChk(){
			var ssn = this.fromInput.start_shelves_no;
			var esn = this.fromInput.end_shelves_no;
			var diff = esn - ssn;
			// console.log(diff);
			var vm = this;
			if (diff < 0) {
				vm.disbutton = true;
				toasterWarning("Recheck","Start row can't be grater than end row")
			}
			else{
				vm.disbutton = false;
			}
		}
    	
	
	},
	
	
}


export { LibraryBookLocationCreate }