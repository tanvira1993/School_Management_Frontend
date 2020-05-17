import  DepartmentListTemplate  from "../../templates/department-template/list-template.js";
import { base_url,sweetAlert,toasterInfo,toasterSuccess,toasterError,toasterWarning} from "../../global.js";
  

const DepartmentList = {
	template: DepartmentListTemplate,

	data() {
		return {
			createModal: false,
			editModal: false,
			deleteModal: false,
			fromInput:{name: '', branches_id: '',shifts_id: ''},
			branches: {},
		    shifts: {},
		    departments: {},
		    clickedDepartment:{}
		  }   
	},
	mounted(){
		console.log("mounted")
		this.getAllDepartments();
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
		getAllDepartments(){
			var vm = this;
			axios.get(base_url+"api/departments")
    		.then(function (response) {
    			 vm.departments = response.data.data;
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
    			vm.getAllDepartments();
    			toasterSuccess(response.data.heading,response.data.message)

    		})
    		.catch(function (error) {
    			// console.log(error.response.data.heading);
				toasterError(error.response.data.heading,error.response.data.message)
				// sweetAlert(error.response.data.heading,error.response.data.message)
            });
		},
    	selectDepartment(department){
			this.clickedDepartment = department;
			// console.log(this.clickedDepartment);
		},
    	updateDepartment(){
			var id = this.clickedDepartment.id;
			var vm = this;
			axios.put(base_url+"api/departments/"+id,vm.clickedDepartment)
    		.then(function (response) {
    			// console.log(response);
    			vm.getAllDepartments();
    			toasterSuccess(response.data.heading,response.data.message)
    		})
    		.catch(function (error) {
    			// console.log(error);
    			vm.getAllDepartments();
				toasterError(error.response.data.heading,error.response.data.message)
				// sweetAlert(error.response.data.heading,error.response.data.message)
            });
		},
		deleteDepartment(){
			var id = this.clickedDepartment.id;
			var vm = this;
			axios.delete(base_url+"api/departments/"+id)
    		.then(function (response) {
    			console.log(response);
    			vm.getAllDepartments();
    			toasterSuccess(response.data.heading,response.data.message)
    		})
    		.catch(function (error) {
    			console.log(error.response);
    			vm.getAllDepartments();
    			toasterError(error.response.data.heading,error.response.data.message)
    			// sweetAlert(error.response.data.heading,error.response.data.message)
            });
		}
    	
	
	},
	
	
}


export { DepartmentList }

