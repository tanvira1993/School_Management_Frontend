import  NoticeListTemplate  from "../../templates/notices-templates/notice-list-template.js";
import { base_url,sweetAlert,toasterSuccess,toasterError,headerConfig} from "../../global.js";


const NoticeList = {
	template: NoticeListTemplate,

	data() {
		return {
			url : base_url+'api/', notices: null, editModal: false, deleteModal:false, clickedItem: null,
			branches: null,
		}
	},

	mounted() {
		this.getAllNotices();
		this.getAllBranches();
	},

	methods: {
		createNotice(){
			this.$router.push({ name: "NoticeCreate"});
		},

		fileChange(){

		},

		getAllBranches(){
			var self = this;
			axios.get(this.url+"branch").then(function (response) {
    			self.branches = response.data;
    		}).catch(function (error) {
    			console.log(error.response);
            });
        },

		getAllNotices(){
			var self = this;
			axios.get(this.url+"notices",headerConfig())
    		.then(function (response) {
    			 self.notices = response.data.data;	
    		}).catch(function (error) {
    			console.log(error.response);
            });
		},

		fileChange(e){

			if(e.target.files){
				var self = this;
				var fileReader = new FileReader()
				self.clickedItem.fileName = e.target.files[0].name
				fileReader.readAsDataURL(e.target.files[0])
				fileReader.onload = (e) => {
					self.clickedItem.fileData = e.target.result
				}
			}
			
		},

		update(){
			var self = this;
            this.clickedItem.updated_by = localStorage.getItem("idUser");
			axios.put(this.url+"notices/"+self.clickedItem.id , self.clickedItem,headerConfig()).then(function(response){
				self.getAllNotices();
                iziToast.success({    title: response.data.heading,    message: response.data.message });
            }).catch(function (error) {
				self.getAllNotices();
				iziToast.error({    title: error.response.data.heading,    message: error.response.data.message });
            });
		},

		removeItem(){
			var self = this;
			axios.delete(this.url+"notices/"+self.clickedItem.id,headerConfig()).then(function (response) {
    			self.getAllNotices();
    			iziToast.success({    title: response.data.heading,    message: response.data.message });
    		})
    		.catch(function (error) {
    			self.getAllNotices();
    			iziToast.error({    title: error.response.data.heading,    message: error.response.data.message });
            });
		}
	},
 
	
}


export { NoticeList }