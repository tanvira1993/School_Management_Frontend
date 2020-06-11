import  ClassListTemplate  from "../../templates/class-templates/class-list-template.js";
import { base_url,sweetAlert,toasterSuccess,toasterError,headerConfig} from "../../global.js";


const ClassList = {
	template: ClassListTemplate,

	data() {
		return {
			url: base_url+"api/", editModal: false, deleteModal: false, clickedItem: null,
			classes: null, branches: null, departments: null,
		}
	},

	mounted() {
		this.getAllClass();
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

		createClass(){
			this.$router.push({ name: "ClassCreate"});
		},

		getAllClass(){
			var self = this;
			axios.get(this.url+"class",headerConfig())
    		.then(function (response) {
    			 self.classes = response.data.data;
    			// console.log(vm.branches);	
    		}).catch(function (error) {
    			console.log(error.response);
            });
		},

		updateItem(){
			var self = this;
			axios.put(this.url+"class/"+self.clickedItem.id,self.clickedItem,headerConfig())
    		.then(function (response) {
    			self.getAllClass();
				toasterSuccess(response.data.heading,response.data.message)
    		})
    		.catch(function (error) {
    			console.log(error.response);
    			self.getAllClass();
				toasterError(error.response.data.heading,error.response.data.message)

            });
		},

		deleteItem(){
			var self = this;
			axios.delete(this.url+"class/"+self.clickedItem.id,self.clickedItem,headerConfig())
    		.then(function (response) {
    			self.getAllClass();
				toasterSuccess(response.data.heading,response.data.message)
    		})
    		.catch(function (error) {
    			console.log(error.response);
    			self.getAllClass();
				toasterError(error.response.data.heading,error.response.data.message)

            });
		},

		
	},
	
	
}


export { ClassList }