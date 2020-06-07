import  LibraryCategoriesListTemplate  from "../../../templates/library-templates/library-categories-templates/list-template.js";
import { base_url,sweetAlert,toasterSuccess,toasterError,headerConfig} from "../../../global.js";
   

const LibraryCategoriesList = {
	template: LibraryCategoriesListTemplate,

	data() {
		return {
			editModal: false,
			deleteModal: false,
			branches: {},
		    categories: {},
		    clickedCategory:{}
		  }   
	},
	
	mounted(){
		console.log("mounted")
		setTimeout(() => $('#example1').DataTable(), 2000);
		this.getAllCategories();
		this.getAllBranches();
	},

	methods: {
		createPage(){
			this.$router.push({ name: "LibraryCategoriesCreate"});
		},
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
		getAllCategories(){
			var vm = this;
			axios.get(base_url+"api/libraryBookCategories",headerConfig())
    		.then(function (response) {
    			 vm.categories = response.data.data;
    			 setTimeout(() => $('#example1').DataTable(), 2000);
    		})
    		.catch(function (error) {
    			console.log(error.response);
            });
    	},
    	selectCategory(category){
			this.clickedCategory = category;
			// console.log(this.clickedBook);
		},
    	updateCategory(){
			var id = this.clickedCategory.id;
			var vm = this;
			axios.put(base_url+"api/libraryBookCategories/"+id,vm.clickedCategory,headerConfig())
    		.then(function (response) {
    			// console.log(response);
    			vm.getAllCategories();
				toasterSuccess(response.data.heading,response.data.message)
    		})
    		.catch(function (error) {
    			console.log(error.response);
    			vm.getAllCategories();
				toasterError(error.response.data.heading,error.response.data.message)
				// sweetAlert(error.response.data.heading,error.response.data.message)

            });
		},
		deleteCategory(){
			var id = this.clickedCategory.id;
			var vm = this;
			axios.delete(base_url+"api/libraryBookCategories/"+id,headerConfig())
    		.then(function (response) {
    			// console.log(response);
    			vm.getAllCategories();
    			toasterSuccess(response.data.heading,response.data.message)	
    		})
    		.catch(function (error) {
    			console.log(error.response);
    			vm.getAllCategories();
    			toasterError(error.response.data.heading,error.response.data.message)
				// sweetAlert(error.response.data.heading,error.response.data.message)
            });
		}
    	
	
	},
	
	
}


export { LibraryCategoriesList }