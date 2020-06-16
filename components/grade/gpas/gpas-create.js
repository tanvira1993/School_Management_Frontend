import  GPACreateTemplate  from "../../../templates/grade-templates/gpas-templates/gpas-create-template.js";
import { base_url,sweetAlert,toasterSuccess,toasterError,headerConfig} from "../../../global.js";


const GPACreate = {
	template: GPACreateTemplate,

	data() {
		return {
			url: base_url+"api/",
            branches: null, grades: null, newGpa: {}
		}
	},

	mounted() {
        this.getAllBranches();
        this.getGradesList();
	},

	methods: {
		getAllBranches(){
			var self = this;
			axios.get(this.url+"branch").then(function (response) {
				self.branches = response.data;
			}).catch(function (error) {
				console.log(error.response);
			});
		},
	
		getGradesList(){
			var self = this;
				axios.get(this.url+"grades").then( function(response){
					self.grades = response.data;
				}).catch(function (error) {
					console.log(error.response);
				});
		},

		submit(){
			var self = this;
			this.newGpa.created_by = localStorage.getItem("idUser");
            axios.post(this.url+"gpas", this.newGpa,headerConfig()).then(function(response){
                self.$router.push({ name: "GPAList"});
				iziToast.success({    title: response.data.heading,    message: response.data.message });
				
			}).catch(function (error) {
				iziToast.error({    title: error.response.data.heading,    message: error.response.data.message });
            });
		},
	},
	
	
 
	
	
}


export { GPACreate }