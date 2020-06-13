import  GradesListTemplate  from "../../../templates/grade-templates/grades-templates/grades-list-template.js";
import { base_url,sweetAlert,toasterSuccess,toasterError,headerConfig} from "../../../global.js";


const GradesList = {
	template: GradesListTemplate,

    data() {
		return {
			url : base_url+'api/',
			createModal: false, editModal: false, deleteModal:false, branches: null,
			grades: null, clickedItem: null, classes: null,
		}
	},

	mounted() {
		this.getGradesList();
		this.getBranches();
		this.getAllClass();
	},
	
	methods: {
		getGradesList(){
			var self = this;
				axios.get(this.url+"grades").then( function(response){
					self.grades = response.data;
				});
		},

		getBranches(){
			var self = this;
			axios.get(this.url+"branch").then( function(res){
				self.branches = res.data;
            });
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

		createGrade(){
			this.$router.push({ name: "GradesCreate"});
		},

		update(){
			var self = this;
            this.clickedItem.updated_by = localStorage.getItem("idUser");
			axios.put(this.url+"grades/"+self.clickedItem.id , self.clickedItem).then(function(response){
				self.getGradesList();
                iziToast.success({    title: response.data.heading,    message: response.data.message });
            }).catch(function (error) {
				self.getGradesList();
				iziToast.error({    title: error.response.data.heading,    message: error.response.data.message });
            });
		},

		removeItem(){
			var self = this;
			axios.delete(this.url+"grades/"+self.clickedItem.id).then(function (response) {
    			self.getGradesList();
    			iziToast.success({    title: response.data.heading,    message: response.data.message });
    		})
    		.catch(function (error) {
    			self.getGradesList();
    			iziToast.error({    title: error.response.data.heading,    message: error.response.data.message });
            });
		}
	},

    
	
	
}


export { GradesList }