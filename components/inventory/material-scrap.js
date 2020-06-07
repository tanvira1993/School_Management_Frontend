import  MaterialScrapTemplate  from "../../templates/inventory/material-scrap-template.js";
import { base_url} from "../../global.js";


const MaterialScrap = {
	template: MaterialScrapTemplate,

	data() {
		return {
			url : base_url+'api/',
			createModal: false, editModal: false, deleteModal:false,
			scraps: null, locations: null, branches: null, materials: null,
			newScraps: {}, clickedItem: null,
		}
	},

	mounted() {
		this.getAllScaps();
		this.getMaterials();
		this.getBranches();
		this.getInventoryLocations();
	},

	methods: {

		getAllScaps(){
			var self = this;
				axios.get(this.url+"material-scrap").then( function(response){
					self.scraps = response.data;
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
			this.newScraps.created_by = localStorage.getItem("idUser");
            axios.post(this.url+"material-scrap", this.newScraps).then(function(response){
				self.getAllScaps();
				iziToast.success({    title: response.data.heading,    message: response.data.message });
				
			}).catch(function (error) {
				iziToast.error({    title: error.response.data.heading,    message: error.response.data.message });
            });
		},

		update(){
			var self = this;
            this.clickedItem.updated_by = localStorage.getItem("idUser");
			axios.put(this.url+"material-scrap/"+self.clickedItem.id , self.clickedItem).then(function(response){
				self.getAllScaps();
                iziToast.success({    title: response.data.heading,    message: response.data.message });
            }).catch(function (error) {
				self.getAllScaps();
				iziToast.error({    title: error.response.data.heading,    message: error.response.data.message });
            });
		},

		removeItem(){
			var self = this;
			axios.delete(this.url+"material-scrap/"+self.clickedItem.id).then(function (response) {
    			self.getAllScaps();
    			iziToast.success({    title: response.data.heading,    message: response.data.message });
    		})
    		.catch(function (error) {
    			self.getAllScaps();
    			iziToast.error({    title: error.response.data.heading,    message: error.response.data.message });
            });
		}

		
		
	},
	
}


export { MaterialScrap }