import  ClassCreateTemplate  from "../../templates/class-templates/class-create-template.js";
import { base_url,sweetAlert,toasterSuccess,toasterError,headerConfig} from "../../global.js";


const ClassCreate = {
	template: ClassCreateTemplate,

	data() {
		return {
			url: base_url+"api/",
			branches: null, departments: null, newClass: {},
		}
	},

	mounted() {
		this.getAllBranches();
		this.getAllDepartments();
	},
	
	methods: {
		getAllBranches(){
			var self = this;
			axios.get(this.url+"branch")
    		.then(function (response) {
    			self.branches = response.data;
    			console.log(response.data);	
    		})
    		.catch(function (error) {
    			console.log(error.response);
            });
		},

		getAllDepartments(){
			var self = this;
			axios.get(this.url+"departments",headerConfig())
    		.then(function (response) {
    			 self.departments = response.data.data;
    		})
    		.catch(function (error) {
    			console.log(error.response);
            });
		},
		
		submit(){

			var self = this;
			axios.post(this.url+"class",this.newClass,headerConfig())
    		.then(function (response) {
    			self.$router.push({ name: "ClassList"});	
    			toasterSuccess(response.data.heading,response.data.message)
    		})
    		.catch(function (error) {
    			console.log(error.response);
				toasterError(error.response.data.heading,error.response.data.message)
				// sweetAlert(error.response.data.heading,error.response.data.message)
            });
		},
	},
}


export { ClassCreate }