import  OrgIndexTemp  from "../../templates/organization-templates/index-template.js";
import { base_url} from "../../global.js";


const OrgIndex = {
    template: OrgIndexTemp,
    data() {
        return {
            organizations: [], showEditForm : false, clickedOrg: {},
        }
    },

    mounted() {
        let url = base_url+'api/organization';
        var self = this;
        axios.get(url).then(function (response){
           self.organizations =  response.data;
        })
    },

    methods: {
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

