import  LibraryBookshelvesCreateTemplate  from "../../../templates/library-templates/library-bookshelves-templates/create-template.js";
import { base_url,sweetAlert,toasterSuccess,toasterError,toasterWarning,headerConfig} from "../../../global.js";

const LibraryBookshelvesCreate = {
	template: LibraryBookshelvesCreateTemplate,

	data() {
		return {
			disbutton: false,
			fromInput:{name: null,quantity: null, branches_id: null},
			branches: {},
		}   
	},
	mounted(){
		console.log("mounted")
		this.getAllBranches();
		
	},

	methods: {
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
    	createBookshelves(){
			var vm = this;
			axios.post(base_url+"api/libraryBookshelves",vm.fromInput,headerConfig())
    		.then(function (response) {
    			// console.log(response);	
    			vm.$router.push({ name: "LibraryBookshelvesList"});	
    			toasterSuccess(response.data.heading,response.data.message)
    		})
    		.catch(function (error) {
    			console.log(error.response);
				toasterError(error.response.data.heading,error.response.data.message)
				// sweetAlert(error.response.data.heading,error.response.data.message)
            });
		},

		quantityValue(){
			var vm = this;
			var qntValue = this.fromInput.quantity;
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


export { LibraryBookshelvesCreate }
