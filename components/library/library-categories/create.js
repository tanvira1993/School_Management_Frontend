import  LibraryCategoriesCreateTemplate  from "../../../templates/library-templates/library-categories-templates/create-template.js";
import { base_url,sweetAlert,toasterSuccess,toasterError,headerConfig} from "../../../global.js";

const LibraryCategoriesCreate = {
	template: LibraryCategoriesCreateTemplate,

	data() {
		return {
			fromInput:{name: null, branches_id: null},
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
			axios.get(base_url+"api/libraryBookCategories/create",headerConfig())
    		.then(function (response) {
    			vm.branches = response.data.data;
    			// console.log(vm.branches);	
    		})
    		.catch(function (error) {
    			console.log(error.response);
            });
		},
    createCategory(){
			var vm = this;
			axios.post(base_url+"api/libraryBookCategories",vm.fromInput,headerConfig())
    		.then(function (response) {
    			// console.log(response);	
    			vm.$router.push({ name: "LibraryCategoriesList"});	
    			toasterSuccess(response.data.heading,response.data.message)
    		})
    		.catch(function (error) {
    			console.log(error.response);
				toasterError(error.response.data.heading,error.response.data.message)
				// sweetAlert(error.response.data.heading,error.response.data.message)
            });
		},
    	
	
	},
	
	
}


export { LibraryCategoriesCreate }