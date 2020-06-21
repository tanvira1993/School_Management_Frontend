import  NoticeCreateTemplate  from "../../templates/notices-templates/notice-create-template.js";
import { base_url,sweetAlert,toasterSuccess,toasterError,headerConfig} from "../../global.js";


const NoticeCreate = {
	template: NoticeCreateTemplate,

	data() {
		return {
			url : base_url+'api/', branches: null,
			newNotice: {},
		}
	},

	mounted() {

		this.getAllBranches();
		
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

		fileChange(e){
			var self = this;
			var fileReader = new FileReader()
			self.newNotice.fileName = e.target.files[0].name
			fileReader.readAsDataURL(e.target.files[0])
			fileReader.onload = (e) => {
				self.newNotice.fileData = e.target.result
			}
			
		},

		submit(){
			var self = this;
			this.newNotice.created_by = localStorage.getItem("idUser");
			axios.post(this.url+"notices", this.newNotice,headerConfig()).then(function(response){
				self.$router.push({ name: "NoticeList"});
				iziToast.success({    title: response.data.heading,    message: response.data.message });
			}).catch(function (error) {
				iziToast.error({    title: error.response.data.heading,    message: error.response.data.message });
			});
		},
	},

	
 
	
}


export { NoticeCreate }