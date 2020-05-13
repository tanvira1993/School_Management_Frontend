import  BranchIndexTemplate  from "../../templates/branch-template/branch-index-template.js";
import { base_url} from "../../global.js";


const BranchIndex = {
    template: BranchIndexTemplate,
    data() {
        return {
            organization : [],
            branches: [], 
            branch: {title: '', organization_id: '', created_by: localStorage.getItem("idUser")}, 
            showCreateForm : false,
            showEditForm: false,
            clickedBranch: {}
            
        }
    },

    mounted() {
        let url = base_url;
        var self = this;
        axios.get(url+'api/branch/get-organization').then(function (response){
            self.organization = response.data;
           console.log(self.organization);
        });

        axios.get(url+'api/branch/index').then(function (response){
            self.branches = response.data;
           console.log(self.branches);
        })

        
        
    },

    methods: {

        submit(){
            var self = this;
            let url_store = base_url;
			axios.post(url_store+"api/branch/store",this.branch).then(function (response) {
				if(response.data == "success"){
                    self.$router.push({name: "Branch"});
					iziToast.info({    title: 'Success',    message: 'Your data has been saved!', }); 
				}
			});
        },

        deleteBranch(id){
            var self = this;
            let url_del = base_url;
                axios.post(url_del+"api/branch/"+id, { id: id, _method: "DELETE"}).then(function (response) {
                    console.log(response.data);
                    if(response.data == "success"){
                        self.$router.push({name: "Branch"});
                        iziToast.info({    title: 'Success',    message: 'Your data has been deleted!', }); 
                    }
                });
        },

        update(id){
            let url_update = base_url;
            this.clickedBranch.updated_by = localStorage.getItem("idUser");
            axios.put(url_update+"api/branch/"+id, this.clickedBranch).then(function(response){
                console.log(response.data);
            })
        }
        
    },

    
	
}


export { BranchIndex }