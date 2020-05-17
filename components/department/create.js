import  DepartmentCreateTemplate  from "../../templates/department-templates/create-template.js";
import { base_url,sweetAlert,toasterInfo,toasterSuccess,toasterError,toasterWarning} from "../../global.js";

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
			axios.get(base_url+"api/departments/create")
    		.then(function (response) {
    			 vm.branches = response.data.data.branchList;
    			 vm.shifts = response.data.data.shiftList;	
    		})
    		.catch(function (error) {
    			console.log(error.response);
            });
		},
		createDepartment(){
			var vm = this;
			axios.post(base_url+"api/departments",vm.fromInput)
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
	
	},
	
	
}


export { DepartmentCreate }