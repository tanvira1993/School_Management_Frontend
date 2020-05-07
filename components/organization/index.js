import  OrgIndexTemp  from "../../templates/organization-templates/index-template.js";
import { base_url} from "../../global.js";


const OrgIndex = {
    template: OrgIndexTemp,
    data() {
        return {
            organizations: [],
        }
    },

    mounted() {
        let url = base_url+'api/organization';
        var self = this;
        axios.get(url).then(function (response){
           self.organizations =  response.data;
        })
    },
	
}


export { OrgIndex }

