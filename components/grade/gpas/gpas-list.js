import  GPAListTemplate  from "../../../templates/grade-templates/gpas-templates/gpas-list-template.js";
import { base_url,sweetAlert,toasterSuccess,toasterError,headerConfig} from "../../../global.js";


const GPAList = {
	template: GPAListTemplate,
 
	data() {
		return {
			url: base_url+"api/", editModal: false, deleteModal: false,
            branches: null, grades: null, newGpa: {}, gpas: null, clickedItem: false,
		}
	},

	mounted() {
        this.getAllBranches();
		this.getGradesList();
		this.getGpas();
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

		getGpas(){
			var self = this;
			axios.get(this.url+"gpas",headerConfig())
    		.then(function (response) {
    			 self.gpas = response.data.data;	
    		}).catch(function (error) {
    			console.log(error.response);
            });
		},

		createGPA(){
			this.$router.push({ name: "GPACreate"});
		},

		update(){
			var self = this;
            this.clickedItem.updated_by = localStorage.getItem("idUser");
			axios.put(this.url+"gpas/"+self.clickedItem.id , self.clickedItem, headerConfig()).then(function(response){
				self.getGpas();
                iziToast.success({    title: response.data.heading,    message: response.data.message });
            }).catch(function (error) {
				self.getGpas();
				iziToast.error({    title: error.response.data.heading,    message: error.response.data.message });
            });
		},

		removeItem(){
			var self = this;
			axios.delete(this.url+"gpas/"+self.clickedItem.id,self.clickedItem,headerConfig())
    		.then(function (response) {
    			self.getGpas();
				toasterSuccess(response.data.heading,response.data.message)
    		})
    		.catch(function (error) {
    			console.log(error.response);
    			self.getGpas();
				toasterError(error.response.data.heading,error.response.data.message)

            });
		},
	},
	
}


export { GPAList }