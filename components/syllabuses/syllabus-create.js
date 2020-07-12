import  SyllabusCreateTemplate  from "../../templates/syllabuses-templates/syllabus-create-template.js";
import { base_url,sweetAlert,toasterSuccess,toasterError,headerConfig} from "../../global.js";


const SyllabusCreate = {
	template: SyllabusCreateTemplate,

	data() {
		return {
			url: base_url+"api/",
			branches: null, classes: null, newSyllabus: {},
		}
	},

	mounted() {
		this.getAllBranches();
		this.getAllClass();
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

		fileChange(e){
			var self = this;
			var fileReader = new FileReader()
			self.newSyllabus.fileName = e.target.files[0].name
			fileReader.readAsDataURL(e.target.files[0])
			fileReader.onload = (e) => {
				self.newSyllabus.fileData = e.target.result
			}
			
		},

		getAllClass(){
			var self = this;
			axios.get(this.url+"class",headerConfig())
    		.then(function (response) {
    			 self.classes = response.data.data;	
    		}).catch(function (error) {
    			console.log(error.response);
            });
		},

		submit(){
			var self = this;
			this.newSyllabus.created_by = localStorage.getItem("idUser");
			axios.post(this.url+"syllabus", this.newSyllabus,headerConfig()).then(function(response){
				self.$router.push({ name: "SyllabusList"});
				iziToast.success({    title: response.data.heading,    message: response.data.message });
			}).catch(function (error) {
				iziToast.error({    title: error.response.data.heading,    message: error.response.data.message });
			});
		},
	},

	

	
}


export { SyllabusCreate }