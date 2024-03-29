import  LibraryBooksCreateTemplate  from "../../../templates/library-templates/library-books-templates/create-template.js";
import { base_url,sweetAlert,toasterSuccess,toasterError,headerConfig} from "../../../global.js";

const LibraryBooksCreate = {
	template: LibraryBooksCreateTemplate,

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
			axios.get(base_url+"api/libraryBooks/create",headerConfig())
    	.then(function (response) {
    			vm.branches = response.data.data;
    			// console.log(vm.branches);	
    		})
    		.catch(function (error) {
    			console.log(error.response);
            });
		},
    createBook(){
			var vm = this;
			axios.post(base_url+"api/libraryBooks",vm.fromInput,headerConfig())
    		.then(function (response) {
    			// console.log(response);	
    			vm.$router.push({ name: "LibraryBooksList"});	
    			toasterSuccess(response.data.heading,response.data.message)
    		})
    		.catch(function (error) {
    			console.log(error.response);
    			console.log('error from library submit');

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
    	
	
	},
	
	
}


export { LibraryBooksCreate }