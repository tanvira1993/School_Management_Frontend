import  DepartmentListTemplate  from "../../templates/department-templates/list-template.js";
import { base_url,sweetAlert,toasterInfo,toasterSuccess,toasterError,toasterWarning,headerConfig} from "../../global.js";

const DepartmentList = {
	template: DepartmentListTemplate,

	data() {
		return {
			editModal: false,
			deleteModal: false,
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
		createPage(){
			this.$router.push({ name: "DepartmentCreate"});
		},
		getAllBranchesAndShifts(){
			var vm = this;
			axios.get(base_url+"api/departments/create",headerConfig())
    		.then(function (response) {
    			 vm.branches = response.data.data.branchList;
    			 // vm.shifts = response.data.data.shiftList;	
    		})
    		.catch(function (error) {
    			console.log(error.response);
            });
		},
		getAllDepartments(){
			var vm = this;
			axios.get(base_url+"api/departments",headerConfig())
    		.then(function (response) {
    			 vm.departments = response.data.data;
    		})
    		.catch(function (error) {
    			console.log(error.response);
            });
    	},
    	selectDepartment(department){
			this.clickedDepartment = department;
			var vm = this;
			axios.get(base_url+"api/findShiftByBranch/"+ vm.clickedDepartment.branches_id,headerConfig())
    		.then(function (response) {
    			 // console.log(response.data.data);	
    			 vm.shifts = response.data.data;
    		})
    		.catch(function (error) {
    			console.log(error.response.data.heading)
            });
			// console.log(this.clickedDepartment);
		},
		findShift(){
			// var id = this.fromInput.branches_id;
			var vm = this;
			axios.get(base_url+"api/findShiftByBranch/"+vm.clickedDepartment.branches_id,headerConfig())
    		.then(function (response) {
    			 // console.log(response.data.data);	
    			 vm.shifts = response.data.data;
    		})
    		.catch(function (error) {
    			console.log(error.response.data.heading)
            });
		},
    	updateDepartment(){
    		console.log(this.clickedDepartment)
			var id = this.clickedDepartment.id;
			var vm = this;
			axios.put(base_url+"api/departments/"+id,vm.clickedDepartment,headerConfig())
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
			axios.delete(base_url+"api/departments/"+id,headerConfig())
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

