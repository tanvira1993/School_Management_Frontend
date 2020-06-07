import  InventoryMaterialReceiveTemplate  from "../../templates/inventory/inventory-material-receive-template.js";
import { base_url} from "../../global.js";


const InventoryMaterialReceive = {
    template: InventoryMaterialReceiveTemplate,
    
    data() {
        return {
            url : base_url+'api/',
            createModal: false, editModal: false, deleteModal: false,
            allReceivesMaterials : null, branches: null, materials: null,
            receiveMaterial: {},
            clickedItem: null,
        }
    },

    mounted() {
        this.getAllReceivesList();
        this.getBranches();
        this.getMaterials();
    },

    methods: {
        getAllReceivesList(){
			var self = this;
			axios.get(this.url+"material-receive").then( function(response){
                self.allReceivesMaterials = response.data;
			});
        },
        
        getBranches(){
            var self = this;
			axios.get(this.url+"branch").then( function(res){
				self.branches = res.data;
            });
        },
        
        getMaterials(){
            var self = this;
			axios.get(this.url+"material").then( function(res){
				self.materials = res.data;
            });
        },
        
        submit(){
            var self = this;
			this.receiveMaterial.created_by = localStorage.getItem("idUser");
            axios.post(this.url+"material-receive", this.receiveMaterial).then(function(response){
                self.getAllReceivesList();
                self.receiveMaterial.quantity = null; self.receiveMaterial.branches_id = null; self.receiveMaterial.materials_id = null;
				iziToast.success({    title: response.data.heading,    message: response.data.message });
				
			}).catch(function (error) {
    			iziToast.error({    title: error.response.data.heading,    message: error.response.data.message });
            });
        },

        updateReceive(){
			var self = this;
            this.clickedItem.updated_by = localStorage.getItem("idUser");
			axios.put(this.url+"material-receive/"+self.clickedItem.id , self.clickedItem).then(function(response){
                self.getAllReceivesList();
                iziToast.success({    title: response.data.heading,    message: response.data.message });
            }).catch(function (error) {
                iziToast.error({    title: error.response.data.heading,    message: error.response.data.message });
            });
        },
        
        removeItem(){
			var self = this;
			axios.delete(this.url+"material-receive/"+self.clickedItem.id).then(function (response) {
    			self.getAllReceivesList();
    			iziToast.success({    title: response.data.heading,    message: response.data.message });
    		})
    		.catch(function (error) {
    			self.getAllReceivesList();
    			iziToast.error({    title: error.response.data.heading,    message: error.response.data.message });
            });
		}
    },
	
}


export { InventoryMaterialReceive }