import  ShiftCreateTemplate  from "../../templates/shift-templates/create-template.js";
import { base_url,sweetAlert,toasterInfo,toasterSuccess,toasterError,toasterWarning} from "../../global.js";

const ShiftCreate = {
	template: ShiftCreateTemplate,

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
			axios.get(base_url+"api/shifts/create")
    		.then(function (response) {
    			 vm.branches = response.data.data;
    			// console.log(vm.branches);	
    		})
    		.catch(function (error) {
    			console.log(error.response);
            });
		},
    	createShift(){
			var vm = this;
			axios.post(base_url+"api/shifts",vm.fromInput)
    		.then(function (response) {
    			// console.log(response);
    			vm.$router.push({ name: "ShiftList"});	
    			toasterSuccess(response.data.heading,response.data.message)

    		})
    		.catch(function (error) {
    			// console.log(error.response.data.heading);
				toasterError(error.response.data.heading,error.response.data.message)
				// sweetAlert(error.response.data.heading,error.response.data.message)
            });
		},
    	
	
	},
	
	
}


export { ShiftCreate }