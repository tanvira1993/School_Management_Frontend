import  ConventionalGradingListTemplate  from "../../../templates/grade-templates/conventional-grading-templates/conventional-grading-list-template.js";
import { base_url,sweetAlert,toasterSuccess,toasterError,headerConfig} from "../../../global.js";


const ConventionalGradingList = {
	template: ConventionalGradingListTemplate,

	data() {
		return {
			url: base_url+"api/", branches: null, grades: null, 
			editModal: false,
			conventionalGrades: null, clickedItem: null, deleteModal: false,
		}
	},

	mounted() {
		this.getAllConventionalGrades();
		this.getAllBranches();
		this.getGrades();
	},

	methods: {

		createNewConventionalGrade(){
			this.$router.push({ name: "ConventionalGradingCreate"});
		},

		getAllConventionalGrades(){
			var self = this;
			axios.get(this.url+"conventional-grading",headerConfig())
    		.then(function (response) {
				 self.conventionalGrades = response.data.data;
    		}).catch(function (error) {
    			console.log(error.response);
            });
		},

		getAllBranches(){
			var self = this;
			axios.get(this.url+"branch").then(function (response) {
    			self.branches = response.data;
    		}).catch(function (error) {
    			console.log(error.response);
            });
        },
        
        getGrades(){
            var self = this;
                axios.get(this.url+"grades").then( function(response){
                    self.grades = response.data;
                    console.log(self.grades);
                }).catch(function (error) {
                    console.log(error.response);
                });
		},
		
		updateItem(){
			var self = this;
			axios.put(this.url+"conventional-grading/"+self.clickedItem.id,self.clickedItem,headerConfig())
    		.then(function (response) {
    			self.getAllConventionalGrades();
				toasterSuccess(response.data.heading,response.data.message)
    		})
    		.catch(function (error) {
    			console.log(error.response);
    			self.getAllConventionalGrades();
				toasterError(error.response.data.heading,error.response.data.message)

            });
		},

		deleteItem(){
			var self = this;
			axios.delete(this.url+"conventional-grading/"+self.clickedItem.id,self.clickedItem,headerConfig())
    		.then(function (response) {
    			self.getAllConventionalGrades();
				toasterSuccess(response.data.heading,response.data.message)
    		})
    		.catch(function (error) {
    			console.log(error.response);
    			self.getAllConventionalGrades();
				toasterError(error.response.data.heading,error.response.data.message)

            });
		},

	},

	
	
}


export { ConventionalGradingList }