import  OrgIndexTemp  from "../../templates/organization-templates/index-template.js";
import { base_url} from "../../global.js";


const OrgIndex = {
    template: OrgIndexTemp,
    data() {
        return {
            createModal : false,
            editModal: false,
            deleteModal: false,
            createOrganization: {name: '', created_by: ''},
            organizations: [],
            clickedOrganization:{}, 
            
            
            clickedOrg: {},
        }
    },

    mounted() {
        let url = base_url+'api/organization';
        var self = this;
        this.getAllOrganization();
        axios.get(url).then(function (response){
           self.organizations =  response.data;
        })
    },

    methods: {

        submitOrganization(){
            var self = this;
            self.createOrganization.created_by = localStorage.getItem("idUser");
			axios.post("http://127.0.0.1:8000/api/organization",this.createOrganization).then(function (response) {
                self.getAllOrganization();
			});
        },

        getAllOrganization(){
			var self = this;
			axios.get("http://127.0.0.1:8000/api/organization").then( function(res){
                self.organizations = res.data
            });
    		
        },
        
        updateOrganization(){
            this.clickedOrganization.updated_by = localStorage.getItem("idUser");
			var id = this.clickedOrganization.id;
			var self = this;
			axios.put("http://127.0.0.1:8000/api/organization/"+id, self.clickedOrganization).then(function(res){
                console.log(res.data);
            });
        },

        deleteOrdanization(){

            var id = this.clickedOrganization.id;
			var self = this;
			axios.delete("http://127.0.0.1:8000/api/organization/"+id)
    		.then(function (response) {
    			// console.log(response);
    			self.getAllOrganization();
    		});
            
        },










        deleteOrg(id){
            var self = this;
                axios.post("http://127.0.0.1:8000/api/organization/"+id, { id: id, _method: "DELETE"}).then(function (response) {
                    if(response.data == "success"){
                        self.$router.push({name: "organizationIndex"});
                        iziToast.info({    title: 'Success',    message: 'Your data has been deleted!', }); 
                    }
                });
        },

        update(id){
            this.clickedOrg.updated_by = localStorage.getItem("idUser");
            axios.put("http://127.0.0.1:8000/api/organization/"+id, this.clickedOrg).then(function(response){
                console.log(response.data);
            })
        }
    },
	
}


export { OrgIndex }

