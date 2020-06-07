import  LibraryBookLocationListTemplate  from "../../../templates/library-templates/library-book-location-templates/list-template.js";
import { base_url,sweetAlert,toasterSuccess,toasterError,toasterWarning,headerConfig} from "../../../global.js";
   

const LibraryBookLocationList = {
	template: LibraryBookLocationListTemplate,

	data() {
		return {
			editModal: false,
			deleteModal: false,
            disbutton: false,
			branches: {},
		    bookLocations: {},
		    clickedBookLocation:{},
		    categories: {},
			books: {},
			booksheleves: {},
			bookshelevesRow: null,
		  }   
	},
	
	mounted(){
		console.log("mounted")
		setTimeout(() => $('#example1').DataTable(), 2000);
		this.getAllBookLocations();
		this.getAllBranches();
	},

	methods: {
		createPage(){
			this.$router.push({ name: "LibraryBookLocationCreate"});
		},
		getAllBranches(){
			var vm = this;
			axios.get(base_url+"api/libraryBookLocations/create",headerConfig())
    		.then(function (response) {
    			 vm.branches = response.data.data;
    			// console.log(vm.branches);	
    		})
    		.catch(function (error) {
    			console.log(error.response);
            });
		},
		getAllBookLocations(){
			var vm = this;
			axios.get(base_url+"api/libraryBookLocations",headerConfig())
    		.then(function (response) {
    			 vm.bookLocations = response.data.data;
    			 setTimeout(() => $('#example1').DataTable(), 2000);
    			// console.log(vm.books);	
    		})
    		.catch(function (error) {
    			console.log(error.response);
            });
    	},
    	selectBookLocation(bookLocation){
			this.clickedBookLocation = bookLocation;
			console.log(this.clickedBookLocation);
			var vm = this;
			/*var id = this.clickedBookLocation.branches_id*/
			axios.get(base_url+"api/updateLibraryLocationDependencies/"+vm.clickedBookLocation.branches_id,headerConfig())
    		.then(function (response) {
    			 console.log(response.data.data.libraryBookCategories);	
    			 vm.categories = response.data.data.libraryBookCategories;
    			 vm.books = response.data.data.libraryBooks;
    			 vm.booksheleves = response.data.data.libraryBookshelves;
    			 // console.log(response.data.data);
    		})
    		.catch(function (error) {
    			console.log(error.response.data.heading)
            });

            axios.get(base_url+"api/findBookshelvesRow/"+vm.clickedBookLocation.library_bookshelves_id,headerConfig())
    		.then(function (response) {
    			 console.log(response);	
    			 vm.bookshelevesRow = response.data.data;
    		})
    		.catch(function (error) {
    			console.log(error.response.data.heading)
            });
		},
    	updateBookLocation(){
			var id = this.clickedBookLocation.id;
			var vm = this;
			axios.put(base_url+"api/libraryBookLocations/"+id,vm.clickedBookLocation,headerConfig())
    		.then(function (response) {
    			// console.log(response);
    			vm.getAllBookLocations();
				toasterSuccess(response.data.heading,response.data.message)
    		})
    		.catch(function (error) {
    			console.log(error.response);
    			vm.getAllBookLocations();
				toasterError(error.response.data.heading,error.response.data.message)
				// sweetAlert(error.response.data.heading,error.response.data.message)

            });
		},
        findBookshelvesRow(){
            this.bookshelevesRow = null;
            var id = this.clickedBookLocation.library_bookshelves_id;
            var vm = this;
            axios.get(base_url+"api/findBookshelvesRow/"+id,headerConfig())
            .then(function (response) {
                 /*console.log(response);   */
                 vm.bookshelevesRow = response.data.data;
            })
            .catch(function (error) {
                console.log(error.response.data.heading)
            });
        },
        reservedBooks(){
            var reseved = this.clickedBookLocation.reserved;
            var bookQuantity = this.clickedBookLocation.quantity;
            var diff = bookQuantity - reseved;
            console.log(diff);
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
            var qntValue = this.clickedBookLocation.quantity;
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
            var rsvValue = this.clickedBookLocation.reserved;
            if (rsvValue < 0) {
                vm.disbutton = true;
                toasterWarning("Recheck","Book's reserved value can't be negative")
            }
            else{
                vm.disbutton = false;
            }
        },
		deleteBookLocation(){
			var id = this.clickedBookLocation.id;
			var vm = this;
			axios.delete(base_url+"api/libraryBookLocations/"+id,headerConfig())
    		.then(function (response) {
    			// console.log(response);
    			vm.getAllBookLocations();
    			toasterSuccess(response.data.heading,response.data.message)	
    		})
    		.catch(function (error) {
    			console.log(error.response);
    			toasterError(error.response.data.heading,error.response.data.message)
				// sweetAlert(error.response.data.heading,error.response.data.message)
            });
		},
        shelvesValidationChk(){
            var ssn = this.clickedBookLocation.start_shelves_no;
            var esn = this.clickedBookLocation.end_shelves_no;
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


export { LibraryBookLocationList }