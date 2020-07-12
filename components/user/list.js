import  UserListTemplate  from "../../templates/user-templates/list-template.js";
import { base_url,sweetAlert,toasterInfo,toasterSuccess,toasterError,toasterWarning,headerConfig} from "../../global.js";
  

const UserList = {
	template: UserListTemplate,

	data() {
		return {
			editModal: false,
			deleteModal: false,
			branches: {},
		    shifts: {},
		    clickedShift:{}
		  }   
	},
	mounted(){
		console.log("mounted")
		this.getAllShifts();
		this.getAllBranches();
		
	},

	methods: {
		createPage(){
			this.$router.push({ name: "ShiftCreate"});
		},
		getAllBranches(){
			var vm = this;
			axios.get(base_url+"api/shifts/create",headerConfig())
    		.then(function (response) {
    			 vm.branches = response.data.data;
    			// console.log(vm.branches);	
    		})
    		.catch(function (error) {
    			console.log(error.response);
            });
		},
		getAllShifts(){
			var vm = this;
			axios.get(base_url+"api/shifts",headerConfig())
    		.then(function (response) {
    			 vm.shifts = response.data.data;
    		})
    		.catch(function (error) {
    			console.log(error.response);
            });
    	},
    	selectShift(shift){
			this.clickedShift = shift;
		},
    	updateShift(){
			var id = this.clickedShift.id;
			var vm = this;
			axios.put(base_url+"api/shifts/"+id,vm.clickedShift,headerConfig())
    		.then(function (response) {
    			// console.log(response);
    			vm.getAllShifts();
    			toasterSuccess(response.data.heading,response.data.message)
    		})
    		.catch(function (error) {
    			// console.log(error);
    			// console.log('error from shift update');
    			vm.getAllShifts();
				toasterError(error.response.data.heading,error.response.data.message)
				// sweetAlert(error.response.data.heading,error.response.data.message)
            });
		},
		deleteShift(){
			var id = this.clickedShift.id;
			var vm = this;
			axios.delete(base_url+"api/shifts/"+id,headerConfig())
    		.then(function (response) {
    			console.log(response);
    			vm.getAllShifts();
    			toasterSuccess(response.data.heading,response.data.message)
    		})
    		.catch(function (error) {
    			console.log(error.response.data.data);
    			vm.getAllShifts();
    			toasterError(error.response.data.heading,error.response.data.message)
    			// sweetAlert(error.response.data.heading,error.response.data.message)
            });
		}
    	
	
	},
	
	
}


export { UserList }

