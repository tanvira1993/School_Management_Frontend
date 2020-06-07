import  MaterialRefundTemplate  from "../../templates/inventory/material-refund-template.js";
import { base_url} from "../../global.js";


const MaterialRefund = {
	template: MaterialRefundTemplate,

	data() {
		return {
            url : base_url+'api/',
            materials: null, branches: null, locations: null,
            createModal: false, editModal: false, deleteModal:false,
            allRefunds: null, newRefund: {}, clickedItem: null,
			
		}
	},

	mounted() {

        this.getAllRefunds();
        this.getMaterials();
        this.getBranches();
        this.getInventoryLocations();
		
	},

	methods: {

		getAllRefunds(){
			var self = this;
				axios.get(this.url+"material-refund").then( function(response){
					self.allRefunds = response.data;
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
			this.newRefund.created_by = localStorage.getItem("idUser");
            axios.post(this.url+"material-refund", this.newRefund).then(function(response){
				self.getAllRefunds();
				iziToast.success({    title: response.data.heading,    message: response.data.message });
				
			}).catch(function (error) {
				iziToast.error({    title: error.response.data.heading,    message: error.response.data.message });
            });
        },
        
        update(){
			var self = this;
            this.clickedItem.updated_by = localStorage.getItem("idUser");
			axios.put(this.url+"material-refund/"+self.clickedItem.id , self.clickedItem).then(function(response){
				self.getAllRefunds();
                iziToast.success({    title: response.data.heading,    message: response.data.message });
            }).catch(function (error) {
				iziToast.error({    title: error.response.data.heading,    message: error.response.data.message });
            });
        },
        
        removeItem(){
			var self = this;
			axios.delete(this.url+"material-refund/"+self.clickedItem.id).then(function (response) {
    			self.getAllRefunds();
    			iziToast.success({    title: response.data.heading,    message: response.data.message });
    		})
    		.catch(function (error) {
    			self.getAllRefunds();
    			iziToast.error({    title: error.response.data.heading,    message: error.response.data.message });
            });
		}
		
	},
	
}


export { MaterialRefund }