import  MaterialTransferTemplate  from "../../templates/inventory/material-transfer-template.js";
import { base_url} from "../../global.js";


const MaterialTransfer = {
	template: MaterialTransferTemplate,

	data() {
		return {
			url : base_url+'api/',
			createModal: false, editModal: false, deleteModal:false,
			transfers: null, locations: null, branches: null, materials: null,
			newTransfer: {}, clickedItem: null,
		}
	},

	mounted() {
		this.getAlltransfers();
		this.getMaterials();
		this.getBranches();
		this.getInventoryLocations();
	},

	methods: {

		getAlltransfers(){
			var self = this;
				axios.get(this.url+"material-tranfer").then( function(response){
					self.transfers = response.data;
				});
		},

		getMaterials(){
            var self = this;
			axios.get(this.url+"material").then( function(res){
                self.materials = res.data;
            });
		},

		getBranches(){
			var self = this;
			axios.get(this.url+"branch").then( function(res){
				self.branches = res.data;
            });
		},

		getInventoryLocations(){
			var self = this;
			axios.get(this.url+"inventory-location").then( function(res){
				self.locations = res.data;
			});
		},

		submit(){
			var self = this;
			this.newTransfer.created_by = localStorage.getItem("idUser");
            axios.post(this.url+"material-tranfer", this.newTransfer).then(function(response){
				self.getAlltransfers();
				iziToast.success({    title: response.data.heading,    message: response.data.message });
				
			}).catch(function (error) {
				iziToast.error({    title: error.response.data.heading,    message: error.response.data.message });
            });
		},

		update(){
			var self = this;
            this.clickedItem.updated_by = localStorage.getItem("idUser");
			axios.put(this.url+"material-tranfer/"+self.clickedItem.id , self.clickedItem).then(function(response){
				self.getAlltransfers();
                iziToast.success({    title: response.data.heading,    message: response.data.message });
            }).catch(function (error) {
				iziToast.error({    title: error.response.data.heading,    message: error.response.data.message });
            });
		},

		removeItem(){
			var self = this;
			axios.delete(this.url+"material-tranfer/"+self.clickedItem.id).then(function (response) {
    			self.getAlltransfers();
    			iziToast.success({    title: response.data.heading,    message: response.data.message });
    		})
    		.catch(function (error) {
    			self.getAlltransfers();
    			iziToast.error({    title: error.response.data.heading,    message: error.response.data.message });
            });
		}
		
	},
	
}


export { MaterialTransfer }