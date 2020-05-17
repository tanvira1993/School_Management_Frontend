import  InventoryInedxTemplate  from "../../templates/inventory/inventory-index-template.js";
import { base_url} from "../../global.js";


const InventoryIndex = {
	template: InventoryInedxTemplate,

	data() {
		return {
			material: {name: '', type: '', description: ''},
			createModal: false, editModal: false, deleteModal: false,
		}
	},
	
}


export { InventoryIndex }

