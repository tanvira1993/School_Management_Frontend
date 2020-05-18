import  InventoryMaterialTemplate  from "../../templates/inventory/inventory-material-template.js";
import { base_url} from "../../global.js";


const InventoryMaterial = {
	template: InventoryMaterialTemplate,

	data() {
		return {
			materials : [],
			branches: [],
			newNaterial: {name: '', branch_id: '', type: '', description: '', created_by: ''},
			clickedItem: {},
			createModal: false, editModal: false, deleteModal: false,
		}
	},

	mounted() {

		this.getMaterials();
		this.getBranches();
		
		
	},

	methods: {

		getBranches(){
            var url_br =  base_url;
            var self = this;
			axios.get(url_br+"api/branch").then( function(res){
                self.branches = res.data;
            });
        },

		
		getMaterials(){
			var url =  base_url;
            var self = this;
			axios.get(url+"api/material").then( function(res){
                self.materials = res.data;
            });
		},

		submit(){
			var url_cr = base_url;
            var self = this;
			self.newNaterial.created_by = localStorage.getItem("idUser")
			
            axios.post(url_cr+"api/material", self.newNaterial).then(function(res){
                self.getMaterials();
                if(res.data == 1){
                    iziToast.success({    title: 'OK',    message: 'Successfully inserted record!', });
                }
            });
		},

		update(){
            var url_up = base_url;
            this.clickedItem.updated_by = localStorage.getItem("idUser");
			var id = this.clickedItem.id;
			var self = this;
			axios.put(url_up+"api/material/"+id, self.clickedItem).then(function(res){
                if(res.data == 1){
                    iziToast.success({    title: 'OK',    message: 'Successfully updated record!', });
                }
            });
		},
		
		removeItem(){

			var self = this;
            var url_del = base_url;
			axios.delete(url_del+"api/material/"+self.clickedItem.id)
    		.then(function (response) {
                self.getMaterials();
                if(response.data == 1){
                    iziToast.info({    title: 'Delete',    message: 'successfully data removed!', });
                }
    		});

		}
	},
	
}


export { InventoryMaterial }

