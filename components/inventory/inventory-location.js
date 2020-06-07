import  InventoryLocationTemplate  from "../../templates/inventory/inventory-location-template.js";
import { base_url,sweetAlert,toasterInfo,toasterSuccess,toasterError,toasterWarning} from "../../global.js";


const InventoryLocation = {
	template: InventoryLocationTemplate,

	data() {
		return {
			url : base_url+'api/',
			branches: null,
			inventroy_locations: null,
			createModal: false,
			editModal: false,
			deleteModal: false,
			newLocation: {name: null, branches_id: null, description: null, created_by: null},
			clickedItem: null,
		}
	},

	mounted() {
		this.getInventoryLocation();
		this.getBranches();
	},

	methods: {
		getInventoryLocation(){
			var self = this;
			axios.get(this.url+"inventory-location").then( function(res){
				self.inventroy_locations = res.data;
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
			this.newLocation.created_by = localStorage.getItem("idUser");
            axios.post(this.url+"inventory-location", this.newLocation).then(function(response){
				self.getInventoryLocation();
				iziToast.success({    title: response.data.heading,    message: response.data.message });
				self.newLocation.name = null; self.newLocation.branches_id = null; self.newLocation.description = null;
			}).catch(function (error) {
				iziToast.error({    title: error.response.data.heading,    message: error.response.data.message });
            });
		},

		update(){
			var self = this;
            this.clickedItem.updated_by = localStorage.getItem("idUser");
			axios.put(this.url+"inventory-location/"+self.clickedItem.id , self.clickedItem).then(function(response){
                iziToast.success({    title: response.data.heading,    message: response.data.message });
            }).catch(function (error) {
				iziToast.error({    title: error.response.data.heading,    message: error.response.data.message });
            });
		},

		removeItem(){
			var self = this;
			axios.delete(this.url+"inventory-location/"+self.clickedItem.id).then(function (response) {
    			self.getInventoryLocation();
    			iziToast.success({    title: response.data.heading,    message: response.data.message });
    		})
    		.catch(function (error) {
    			self.getInventoryLocation();
    			iziToast.error({    title: error.response.data.heading,    message: error.response.data.message });
            });
		}
	},
	
}


export { InventoryLocation }