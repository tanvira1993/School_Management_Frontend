import  DepartmentCreateTemplate  from "../../templates/department-templates/create-template.js";
import { base_url,sweetAlert,toasterInfo,toasterSuccess,toasterError,toasterWarning,headerConfig} from "../../global.js";

const DepartmentCreate = {
	template: DepartmentCreateTemplate,

	data() {
		return {
			fromInput:{name: null, branches_id: null,shifts_id: null},
			branches: {},
			shifts: {},
		  }   
	},
	mounted(){
		console.log("mounted")
		this.getAllBranchesAndShifts();
		
	},

	methods: {
		getAllBranchesAndShifts(){
			var vm = this;
			axios.get(base_url+"api/departments/create",headerConfig())
    		.then(function (response) {
    			 vm.branches = response.data.data.branchList;
    			 /*vm.shifts = response.data.data.shiftList;	*/
    			 // console.log(vm.shifts);
    		})
    		.catch(function (error) {
    			console.log(error.response);
            });
		},
		createDepartment(){
			var vm = this;
			axios.post(base_url+"api/departments",vm.fromInput,headerConfig())
    		.then(function (response) {
    			// console.log(response);	
    			vm.$router.push({ name: "DepartmentList"});
    			toasterSuccess(response.data.heading,response.data.message)

    		})
    		.catch(function (error) {
    			// console.log(error.response.data.heading);
				toasterError(error.response.data.heading,error.response.data.message)
				// sweetAlert(error.response.data.heading,error.response.data.message)
            });
		},
		findShift(){
			var id = this.fromInput.branches_id;
			var vm = this;
			axios.get(base_url+"api/findShiftByBranch/"+id,headerConfig())
    		.then(function (response) {
    			 // console.log(response.data.data);	
    			 vm.shifts = response.data.data;
    		})
    		.catch(function (error) {
    			console.log(error.response.data.heading)
            });
		}
	
	},
	
	
}


export { DepartmentCreate }