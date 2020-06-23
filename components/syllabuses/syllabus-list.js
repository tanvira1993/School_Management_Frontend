import  SyllabusListTemplate  from "../../templates/syllabuses-templates/syllabus-list-template.js";
import { base_url,sweetAlert,toasterSuccess,toasterError,headerConfig} from "../../global.js";


const SyllabusList = {
	template: SyllabusListTemplate,

	data() {
		return {
			url: base_url+"api/", editModal: false, deleteModal: false,
			branches: null, classes: null, clickedItem: null, syllabuses: null,
		}
	},

	mounted() {
		this.getAllBranches();
		this.getAllClass();
		this.getAllSyllabus();
	},

	methods: {
		createSyllabus(){
			this.$router.push({ name: "SyllabusCreate"});
		},
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

		getAllSyllabus(){
			var self = this;
			axios.get(this.url+"syllabus",headerConfig())
    		.then(function (response) {
    			 self.syllabuses = response.data.data;	
    		}).catch(function (error) {
    			console.log(error.response);
            });
		},

		fileChange(e){
			var self = this;
			var fileReader = new FileReader()
			self.clickedItem.fileName = e.target.files[0].name
			fileReader.readAsDataURL(e.target.files[0])
			fileReader.onload = (e) => {
				self.clickedItem.fileData = e.target.result
			}
			
		},

		update(){
			var self = this;
            this.clickedItem.updated_by = localStorage.getItem("idUser");
			axios.put(this.url+"syllabus/"+self.clickedItem.id , self.clickedItem,headerConfig()).then(function(response){
				self.getAllSyllabus();
                iziToast.success({    title: response.data.heading,    message: response.data.message });
            }).catch(function (error) {
				self.getAllSyllabus();
				iziToast.error({    title: error.response.data.heading,    message: error.response.data.message });
            });
		},

		removeItem(){
			var self = this;
			axios.delete(this.url+"syllabus/"+self.clickedItem.id,headerConfig()).then(function (response) {
    			self.getAllSyllabus();
    			iziToast.success({    title: response.data.heading,    message: response.data.message });
    		})
    		.catch(function (error) {
    			self.getAllSyllabus();
    			iziToast.error({    title: error.response.data.heading,    message: error.response.data.message });
            });
		}
	},

	
}


export { SyllabusList }