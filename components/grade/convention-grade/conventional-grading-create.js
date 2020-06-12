import  ConventionalGradingCreateTemplate  from "../../../templates/grade-templates/conventional-grading-templates/conventional-grading-create-template.js";
import { base_url,sweetAlert,toasterSuccess,toasterError,headerConfig} from "../../../global.js";


const ConventionalGradingCreate = {
	template: ConventionalGradingCreateTemplate,

    data() {
        return {
            url: base_url+"api/",
            newConventionalGrade: {}, branches: null, grades: null,
        }
    },

    mounted() {
        this.getAllBranches();
        this.getGrades();
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
        
        getGrades(){
            var self = this;
                axios.get(this.url+"grades").then( function(response){
                    self.grades = response.data;
                    console.log(self.grades);
                }).catch(function (error) {
                    console.log(error.response);
                });
        },

        submit(){
            var self = this;
			axios.post(this.url+"conventional-grading",this.newConventionalGrade,headerConfig())
    		.then(function (response) {
    			self.$router.push({ name: "ConventionalGradingList"});	
    			toasterSuccess(response.data.heading,response.data.message)
    		})
    		.catch(function (error) {
    			console.log(error.response);
				toasterError(error.response.data.heading,error.response.data.message)
            });
        }
    
    },

    
	
	
}


export { ConventionalGradingCreate }