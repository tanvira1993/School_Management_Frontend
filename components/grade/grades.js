import  GradesTemplate  from "../../templates/grade-templates/grades-template.js";
import { base_url} from "../../global.js";


const Grades = {
	template: GradesTemplate,

	data() {
		return {
			url : base_url+'api/',
			createModal: false, editModal: false, deleteModal:false, branches: null,
			grades: null, newGrade: {}, clickedItem: null,
		}
	},

	mounted() {
		this.getGradesList();
		this.getBranches();
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

		submit(){
			var self = this;
			this.newGrade.created_by = localStorage.getItem("idUser");
            axios.post(this.url+"grades", this.newGrade).then(function(response){
				self.getGradesList();
				iziToast.success({    title: response.data.heading,    message: response.data.message });
				self.newGrade = {};
				
			}).catch(function (error) {
				iziToast.error({    title: error.response.data.heading,    message: error.response.data.message });
            });
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


export { Grades }