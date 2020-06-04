import  MaterialConsumeTemplate  from "../../templates/inventory/material-consume-template.js";
import { base_url} from "../../global.js";


const MaterialConsume = {
	template: MaterialConsumeTemplate,


	data() {
		return {
			url : base_url+'api/',
			createModal: false, editModal: false, deleteModal: false,
			materials: null, branches: null, locations: null,
			materialsConsume: null, newMaterialConsume: {}, clickedItem: null,
		}
	},

	mounted() {
		this.getConsumedMaterials();
		this.getMaterials();
		this.getBranches();
		this.getInventoryLocations();
	},

	methods: {
		getConsumedMaterials(){
			var self = this;
			axios.get(this.url+"material-consume").then( function(response){
				self.materialsConsume = response.data;
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
			this.newMaterialConsume.created_by = localStorage.getItem("idUser");
            axios.post(this.url+"material-consume", this.newMaterialConsume).then(function(response){
				self.getConsumedMaterials();
				iziToast.success({    title: response.data.heading,    message: response.data.message });
				
			}).catch(function (error) {
				iziToast.error({    title: error.response.data.heading,    message: error.response.data.message });
            });
		},

		update(){
			var self = this;
            this.clickedItem.updated_by = localStorage.getItem("idUser");
			axios.put(this.url+"material-consume/"+self.clickedItem.id , self.clickedItem).then(function(response){
				self.getConsumedMaterials();
                iziToast.success({    title: response.data.heading,    message: response.data.message });
            }).catch(function (error) {
				iziToast.error({    title: error.response.data.heading,    message: error.response.data.message });
            });
		},

		removeItem(){
			var self = this;
			axios.delete(this.url+"material-consume/"+self.clickedItem.id).then(function (response) {
    			self.getConsumedMaterials();
    			iziToast.success({    title: response.data.heading,    message: response.data.message });
    		})
    		.catch(function (error) {
    			self.getConsumedMaterials();
    			iziToast.error({    title: error.response.data.heading,    message: error.response.data.message });
            });
		}
	},
	
}


export { MaterialConsume }