import  ShiftListTemplate  from "../../templates/shift-template/list-template.js";
import { base_url,sweetAlert,toasterInfo,toasterSuccess,toasterError,toasterWarning} from "../../global.js";
  

const ShiftList = {
	template: ShiftListTemplate,

	data() {
		return {
			createModal: false,
			editModal: false,
			deleteModal: false,
			fromInput:{name: '', branches_id: ''},
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
		getAllShifts(){
			var vm = this;
			axios.get(base_url+"api/shifts")
    		.then(function (response) {
    			 vm.shifts = response.data.data;
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
    			vm.getAllShifts();
    			toasterSuccess(response.data.heading,response.data.message)

    		})
    		.catch(function (error) {
    			// console.log(error.response.data.heading);
				toasterError(error.response.data.heading,error.response.data.message)
				// sweetAlert(error.response.data.heading,error.response.data.message)
            });
		},
    	selectShift(shift){
			this.clickedShift = shift;
			console.log(this.clickedShift);
		},
    	updateShift(){
			var id = this.clickedShift.id;
			var vm = this;
			axios.put(base_url+"api/shifts/"+id,vm.clickedShift)
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
			axios.delete(base_url+"api/shifts/"+id)
    		.then(function (response) {
    			console.log(response);
    			vm.getAllShifts();
    			toasterSuccess(response.data.heading,response.data.message)
    		})
    		.catch(function (error) {
    			console.log(error.response);
    			vm.getAllShifts();
    			toasterError(error.response.data.heading,error.response.data.message)
    			// sweetAlert(error.response.data.heading,error.response.data.message)
            });
		}
    	
	
	},
	
	
}


export { ShiftList }

