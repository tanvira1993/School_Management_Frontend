import  GradesCreateTemplate  from "../../../templates/grade-templates/grades-templates/grades-create-template.js";
import { base_url,sweetAlert,toasterSuccess,toasterError,headerConfig} from "../../../global.js";


const GradesCreate = {
	template: GradesCreateTemplate,

    data() {
        return {
            url: base_url+"api/",
            branches: null,newGrade: {}, classes: null,
        }
    },

    mounted() {
        this.getAllBranches();
        this.getAllClass();
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

        submit(){
			var self = this;
			this.newGrade.created_by = localStorage.getItem("idUser");
            axios.post(this.url+"grades", this.newGrade).then(function(response){
                self.$router.push({ name: "GradesList"});
				iziToast.success({    title: response.data.heading,    message: response.data.message });
				
			}).catch(function (error) {
				iziToast.error({    title: error.response.data.heading,    message: error.response.data.message });
            });
		},
    
    },

    
	
	
}


export { GradesCreate }