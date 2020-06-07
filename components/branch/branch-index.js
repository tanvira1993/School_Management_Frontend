import  BranchIndexTemplate  from "../../templates/branch-template/branch-index-template.js";
import { base_url} from "../../global.js";


const BranchIndex = {
    template: BranchIndexTemplate,
    data() {
        return {
            organizations: [],
            branches: [],
            createModal: false,
            editModal: false,
            deleteModal: false,
            newBranch: {name: '', organization_id: '', created_by: ''},
            clickedBranch: {},
            
            
        }
    },

    mounted() {
        this.getOrganizations();
        this.getBranches();
        
    },

    methods: {

        getOrganizations(){
            var url_org =  base_url;
            var self = this;
			axios.get(url_org+"api/organization").then( function(res){
                self.organizations = res.data;
            });
        },

        getBranches(){
            var url_br =  base_url;
            var self = this;
			axios.get(url_br+"api/branch").then( function(res){
                self.branches = res.data;
            });
        },

        submitBranch(){
            var url_cr = base_url;
            var self = this;

            self.newBranch.created_by = localStorage.getItem("idUser")
            axios.post(url_cr+"api/branch", self.newBranch).then(function(res){
                self.getBranches();
                if(res.data == 1){
                    iziToast.success({    title: 'OK',    message: 'Successfully inserted record!', });
                }
            });
            
        },

        updateBranch(){
            var url_up = base_url;
            this.clickedBranch.updated_by = localStorage.getItem("idUser");
			var id = this.clickedBranch.id;
			var self = this;
			axios.put(url_up+"api/branch/"+id, self.clickedBranch).then(function(res){
                if(res.data == 1){
                    iziToast.success({    title: 'OK',    message: 'Successfully updated record!', });
                }
            });
        },

        deleteBranch(){
            var self = this;
            var url_del = base_url;
			axios.delete(url_del+"api/branch/"+self.clickedBranch.id)
    		.then(function (response) {
                self.getBranches();
                if(response.data == 1){
                    iziToast.info({    title: 'Delete',    message: 'successfully data removed!', });
                }
    		});
        }
        
    },

    
	
}


export { BranchIndex }