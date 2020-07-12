import  UserCreateTemplate  from "../../templates/user-templates/create-template.js";
import { base_url,sweetAlert,toasterInfo,toasterSuccess,toasterError,toasterWarning,headerConfig} from "../../global.js";

const UserCreate = {
	template: UserCreateTemplate,

	data() {
		return {
			fromInput:{
					   name: null, 
					   email: null,
					   password: null,
					   confirm_password: null,
					   present_address: null,
					   contact_no: null,
					   genders_id: null,
					   organizations_id: null,
					   branches_id: null,
					   user_types_id: null,
					   roles_id: null,
					   birth_date: null,
					   joining_date: null,
					   permanent_address: null,
					   post_code: null,
					   designation: null,
					   id_types_id: null,
					   nid_no: null,
					   bc_no: null,
					   image: null,
					   
					   },
			genders: {},
			organizations: {},
			branches: {},
			userTypes: {},
			idTypes: {},
			roles: {},

		  }   
	},
	mounted(){
		console.log("mounted")
		this.getAllGenders();
		this.getAllOrganizations();
		this.getAllUserTypes();
		this.getAllIdTypes();
		this.getAllRoles();
		
	},

	methods: {
		getAllGenders(){
			var vm = this;
			axios.get(base_url+"api/genders",headerConfig())
    		.then(function (response) {
    			 vm.genders = response.data.data;
    			// console.log(vm.branches);	
    		})
    		.catch(function (error) {
    			console.log(error.response);
            });
		},
		getAllOrganizations(){
			var vm = this;
			axios.get(base_url+"api/organizations",headerConfig())
    		.then(function (response) {
    			 vm.organizations = response.data.data;
    			// console.log(vm.branches);	
    		})
    		.catch(function (error) {
    			console.log(error.response);
            });
		},
		getAllOrgBranches(){
			var vm = this;
			axios.get(base_url+"api/orgBranches/"+vm.fromInput.organizations_id,headerConfig())
    		.then(function (response) {
    			 vm.branches = response.data.data;
    			// console.log(vm.branches);	
    		})
    		.catch(function (error) {
    			console.log(error.response);
            });
		},
		getAllUserTypes(){
			var vm = this;
			axios.get(base_url+"api/userTypes",headerConfig())
    		.then(function (response) {
    			 vm.userTypes = response.data.data;
    			// console.log(vm.branches);	
    		})
    		.catch(function (error) {
    			console.log(error.response);
            });
		},
		getAllIdTypes(){
			var vm = this;
			axios.get(base_url+"api/idTypes",headerConfig())
    		.then(function (response) {
    			 vm.idTypes = response.data.data;
    			// console.log(vm.branches);	
    		})
    		.catch(function (error) {
    			console.log(error.response);
            });
		},
		getAllRoles(){
			var vm = this;
			axios.get(base_url+"api/roles",headerConfig())
    		.then(function (response) {
    			 vm.roles = response.data.data;
    			// console.log(vm.branches);	
    		})
    		.catch(function (error) {
    			console.log(error.response);
            });
		},
    	createShift(){
			var vm = this;
			axios.post(base_url+"api/shifts",vm.fromInput,headerConfig())
    		.then(function (response) {
    			// console.log(response);
    			vm.$router.push({ name: "ShiftList"});	
    			toasterSuccess(response.data.heading,response.data.message)
				// sweetAlert(error.response.data.heading,error.response.data.message)
    		})
    		.catch(function (error) {
    			// console.log(error.response.data.heading);
				toasterError(error.response.data.heading,error.response.data.message)
				// sweetAlert(error.response.data.heading,error.response.data.message)
            });
		},
    	
	
	},
	
	
}


export { UserCreate }